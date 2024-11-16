'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import { ExamService } from '@utils/api/exam';
import { FetchError } from '@utils/api';
import LoadingWrapper from '@components/elements/LoadingWrapper';
import { formatDuration } from '@utils/helper';
import { useRouter } from 'next/navigation';
export const Exam = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [exams, setExams] = useState<any[]>([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await ExamService.getList();
        if (response && response.data) {
          setExams(response.data)
        } 
        setIsFetching(false)
      } catch (error: any) {
        setIsFetching(false);
        if (error instanceof FetchError) {
          const errorMessage = error.responseBody?.error?.error || error.responseBody?.message || 'An unexpected error occurred';
          // Display error message in the UI
          setIsFetching(false);
        } else {
          console.error('Unexpected error:', error);
          setIsFetching(false);
        }
      }
    };

    fetchExams()
  }, []);


  return (
    <section>
      <LoadingWrapper isLoading={isFetching}>
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-3">Available English B2 Exams</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Prepare for your B2 exams by taking practice tests for listening, speaking, reading, and writing.
          </p>
        </div>

        {/* Exam Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((exam: any) => (
            <ExamCard
              key={exam.id}
              id={exam.id}
              description={exam.note}
              title={exam.title}
              duration={exam.totalTime}
              skills={exam.totalSkills}
              questions={exam.totalQuestions}
              participants={exam.totalExamies}
            />
          ))}
        </div>
      </div>
      </LoadingWrapper>
  
    </section>
  );
};

interface ExamCardProps {
  id: number;
  title: string;
  description: string;
  duration: number;
  skills: number;
  questions: number;
  participants: number;
}

const ExamCard: React.FC<ExamCardProps> = ({ id, title, description, duration, skills, questions, participants }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-4">
        {/* Skills badge */}
        <div className="flex items-center space-x-2">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
            <svg
              fill="currentColor"
              className="w-4 h-4"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6zm6 7h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm-2 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2zm0-8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2zm-4.172 5.243L7.95 8.12a1 1 0 1 1 1.414 1.415l-2.828 2.828a1 1 0 0 1-1.415 0L3.707 10.95a1 1 0 0 1 1.414-1.414l.707.707z"></path>
              </g>
            </svg>
          </div>
          <span className="text-gray-600 dark:text-gray-300 text-sm">{skills} skills</span>
        </div>
        {/* Number of participants */}
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
          <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path d="M23.313 26.102l-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845 0.78 5.576 3.144 7.472l-6.458 3.503s-1.688 0.752-1.688 1.689v2.534c0 0.933 0.757 1.689 1.688 1.689h21.625c0.931 0 1.688-0.757 1.688-1.689v-2.534c0-0.994-1.689-1.689-1.689-1.689zM23.001 30.015h-21.001v-1.788c0.143-0.105 0.344-0.226 0.502-0.298 0.047-0.021 0.094-0.044 0.139-0.070l6.459-3.503c0.589-0.32 0.979-0.912 1.039-1.579s-0.219-1.32-0.741-1.739c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-0.486 4.557-2.212 5.915-0.528 0.416-0.813 1.070-0.757 1.739s0.446 1.267 1.035 1.589l6.296 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.809zM30.312 21.123l-6.39-3.488c2.34-1.841 3.070-5.459 3.070-7.488v-4.223c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007 0.823 0.051 1.73 0.052 2.514 0.302 1.054-0.821 2.386-1.308 3.833-1.308 2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-0.58 4.557-2.305 5.915-0.529 0.416-0.813 1.070-0.757 1.739 0.056 0.67 0.445 1.267 1.035 1.589l6.39 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.779h-4.037c0.61 0.46 0.794 1.118 1.031 2h3.319c0.931 0 1.688-0.757 1.688-1.689v-2.503c-0.001-0.995-1.689-1.691-1.689-1.691z"></path>{' '}
            </g>
          </svg>
          <span> {participants} participants</span>
        </div>
      </div>
      {/* Exam title */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h2>
      {/* Exam details */}
      <div className="text-gray-600 dark:text-gray-400 mb-4">
        <p>{description}</p>
      </div>
      <div className="text-gray-500 dark:text-gray-300">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
            </g>
          </svg>
          <span>{formatDuration(duration)}</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z"></path>
              <circle cx="7.98" cy="10.95" r=".76"></circle>
              <path d="M9.73 4.75A2.72 2.72 0 0 0 8 4.19a2.28 2.28 0 0 0-2.41 2.17v.11h1.24v-.1A1.12 1.12 0 0 1 8 5.33a1 1 0 0 1 1.12 1c0 .35-.24.73-.78 1.11a2 2 0 0 0-1 1.46v.36h1.24V9a.76.76 0 0 1 .23-.51A3.92 3.92 0 0 1 9.33 8l.17-.14a2 2 0 0 0 .91-1.67 1.85 1.85 0 0 0-.68-1.44z"></path>
            </g>
          </svg>
          <span>{questions} questions</span>
        </div>
      </div>
      {/* Start button */}
      <div className="mt-4 flex justify-between items-center">
        <Link
          href={`/exam/${id}`}
          className="block bg-blue-500 dark:bg-blue-600 text-white text-center py-2 px-4 mt-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition"
        >
          Join Exam
        </Link>
      </div>
    </div>
  );
};
