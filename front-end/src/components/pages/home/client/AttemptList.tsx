'use client';
import React, { useEffect, useState } from 'react';
import { ExamAttemptServices } from '@utils/api/exam-attempt';
import { useAuth } from '@components/providers/AuthProvider';
import { FetchError } from '@utils/api';
import Link from 'next/link';

const AttemptList = () => {
  const { user } = useAuth();
  const [attempts, setAttempts] = useState<any>([]);
  const [isFetching, setIsFetching] = useState<any>(true);
  const [errorMessage, setErrorMessage] = useState<any>(null);

  useEffect(() => {
    const fetchAttempts = async (userId: number) => {
      try {
        const response = await ExamAttemptServices.getAllAttemptsForUser(userId);
        if (response && response.data) {
          setAttempts(response.data);
        }
      } catch (error) {
        if (error instanceof FetchError) {
          const errorMessage =
            error.responseBody?.error?.error ||
            error.responseBody?.message ||
            'An unexpected error occurred';
          setErrorMessage(errorMessage);
        } else {
          console.error('Unexpected error:', error);
          setErrorMessage('An unexpected error occurred');
        }
      } finally {
        setIsFetching(false);
      }
    };

    user?.id && fetchAttempts(Number(user.id));
  }, [user?.id]);

  if (isFetching) {
    return <div className="text-center text-lg font-semibold mt-4">Loading...</div>;
  }

  if (errorMessage) {
    return <div className="text-center text-red-500 text-lg font-semibold mt-4">Error: {errorMessage}</div>;
  }

  return (
    <div className="p-4 container mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-3 text-center">Your Exam Attempt</h2>
      <div className="space-y-4">
        {attempts.map((attempt:any) => (
          <div
            key={attempt.id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                <span className="text-blue-500 dark:text-blue-300">✏️</span>
              </div>
              <div className="ml-4">
                <Link href={`/exam-attempt/${attempt.id}`} className="text-lg font-semibold text-blue-500 dark:text-blue-300 hover:underline">
                  {attempt.exam.name}
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(attempt.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  attempt.status === 'in_progress'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    : attempt.status === 'completed'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                }`}
              >
                {attempt.status === 'in_progress' ? 'In Progress' : 'Completed'}
              </span>
            </div>
          </div>
        ))}
        {attempts.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">No attempts found.</p>
        )}
      </div>
    </div>
  );
};

export default AttemptList;
