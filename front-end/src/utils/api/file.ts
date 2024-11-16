import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';

import { storage } from 'base/config/firebaseConfig';

export const FirebaseService = {
  /**
   * Uploads a file to Firebase Storage and returns the download URL.
   * @param file - The file to upload.
   * @param filePath - The storage path where the file will be saved.
   * @param onProgress - Optional callback to monitor upload progress.
   * @returns A promise resolving with the download URL of the uploaded file.
   */
  uploadFile: async (file: Blob | File, filePath: string, onProgress?: (progress: number) => void): Promise<string> => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, filePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (onProgress) onProgress(progress);
        },
        (error) => {
          console.error('Error uploading file:', error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  },

  /**
   * Deletes a file from Firebase Storage.
   * @param filePath - The storage path of the file to delete.
   * @returns A promise resolving when the file is deleted.
   */
  deleteFile: async (filePath: string): Promise<void> => {
    const fileRef = ref(storage, filePath);
    try {
      await deleteObject(fileRef);
      console.log(`File deleted at path: ${filePath}`);
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  }
};
