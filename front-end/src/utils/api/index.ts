import constants from '@utils/constants';

export type QueryParams = Record<string, string | number | undefined | boolean | number[] | null>;
export type BodyData = Record<string, string | number | null | boolean | any[]> | FormData;

export class FetchError extends Error {
  status?: number;
  responseBody?: any;

  constructor(status: number, message: string, responseBody?: any) {
    super(message);
    this.status = status ?? 500;
    this.responseBody = responseBody;
    this.name = 'FetchError';
  }
}

export class ApiService {
  private baseUrl?: string;
  private apiKey?: string;
  private language?: string;

  constructor(baseUrl?: string, apiKey?: string, language: string = 'en') {
    this.baseUrl = baseUrl ?? `${constants.BACKEND_API_URL}`;
    this.apiKey = apiKey;
    this.language = language;
  }

  async request(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    params?: QueryParams,
    bodyData?: BodyData,
    options?: {
      contentType?: string;
      token?: string;
      isAuthorized?: boolean;
      retry?: number; // Number of retries
    }
  ): Promise<any> {
    const url = this.constructUrl(endpoint, params);
    const headers = this.buildHeaders(options, bodyData);
    const retries = options?.retry || 0;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: method !== 'GET' && bodyData ? this.prepareBody(bodyData) : undefined,
          credentials: 'include'
        });

        if (!response.ok) {
          const responseBody = await this.parseResponse(response);
          throw new FetchError(response.status, response.statusText, responseBody);
        }

        return await this.parseResponse(response);
      } catch (error) {
        if (error instanceof FetchError) {
          console.error('FetchError details:', {
            status: error.status,
            message: error.message,
            responseBody: error.responseBody
          });
        }

        if (attempt === retries || !(error instanceof FetchError)) {
          throw this.handleError(error);
        }

        // Optional: Add a delay before retrying
        await this.delay(1000 * attempt);
      }
    }
  }

  async get(endpoint: string, params?: QueryParams, options?: any): Promise<any> {
    return this.request('GET', endpoint, params, undefined, options);
  }

  async post(endpoint: string, bodyData: BodyData, options?: any): Promise<any> {
    return this.request('POST', endpoint, undefined, bodyData, options);
  }

  async put(endpoint: string, bodyData: BodyData, options?: any): Promise<any> {
    return this.request('PUT', endpoint, undefined, bodyData, options);
  }

  async delete(endpoint: string, bodyData?: BodyData, options?: any): Promise<any> {
    return this.request('DELETE', endpoint, undefined, bodyData, options);
  }

  private buildHeaders(options?: any, data?: BodyData): HeadersInit {
    const headers: HeadersInit = {};

    if (!(data instanceof FormData)) {
      headers['Content-Type'] = options?.contentType || 'application/json';
    }

    const authToken = options?.token || this.getAccessToken();
    if (authToken) headers.Authorization = `Bearer ${authToken}`;
    return headers;
  }

  private constructUrl(endpoint: string, params?: QueryParams): string {
    const url = `${this.baseUrl}/${endpoint}`;
    const queryString = params
      ? `?${new URLSearchParams(
          Object.entries(params).reduce(
            (acc, [key, value]) => {
              if (value != null) acc[key] = String(value);
              return acc;
            },
            {} as Record<string, string>
          )
        ).toString()}`
      : '';
    return `${url}${queryString}`;
  }

  private prepareBody(data: BodyData): BodyInit | null {
    return data instanceof FormData ? data : JSON.stringify(data);
  }

  private async parseResponse(response: Response): Promise<any> {
    try {
      return await response.json();
    } catch {
      return response.text(); // Fallback to text if JSON parsing fails
    }
  }

  private handleError(error: any): FetchError {
    console.error('Handling error:', {
      status: error?.status,
      message: error?.message,
      responseBody: error?.responseBody
    });

    if (error instanceof FetchError) {
      if (error.status === 401) {
        this.removeAccessToken();
        window.location.href = '/login'; // Redirect to login
      }

      // Extract detailed error message from responseBody
      const detailedMessage = error.responseBody?.error?.error || error.responseBody?.message || error.message;

      console.error('Detailed error message:', detailedMessage);

      // Re-throw the error with the detailed message
      return new FetchError(error?.status ?? 500, detailedMessage, error.responseBody);
    }

    const defaultMessage = 'An unexpected error occurred';
    return new FetchError(500, defaultMessage, {});
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private getAccessToken(): string | null {
    const token = localStorage.getItem('accessToken');
    return token && !this.isJwtExpired(token) ? token : null;
  }

  private isJwtExpired(token: string): boolean {
    try {
      const [, payload] = token.split('.');
      const { exp } = JSON.parse(atob(payload));
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  }

  private removeAccessToken(): void {
    localStorage.removeItem('accessToken');
  }
}
