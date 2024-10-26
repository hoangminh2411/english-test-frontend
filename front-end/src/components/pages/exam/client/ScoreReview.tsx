'use client';
import { useExamProvider } from '@components/providers/ExamProvider';
import { QuestionType } from 'types/exam';
import React from 'react';

export const ScoreReview = () => {
  const { onDispatchAction } = useExamProvider();
  const scoreSkills = [
    {
      title: 'READING',
      icon: (
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M38.203 25.776c.981-.013 1.966.035 2.947-.023c1.28-.116 2.328-1.288 2.338-2.573c.024-3.436-.002-6.87.011-10.306c.008-.548-.033-1.114-.283-1.611c-.435-.962-1.505-1.54-2.539-1.49c-4.641.002-9.283-.001-13.924.002c-1.197-.048-2.37.79-2.652 1.972c-.178.856-.064 1.739-.091 2.605m14.193 11.423q-.9 0-1.8.012c-2.845.016-5.69-.005-8.533.008c-.464-.026-.707.439-1.013.71c-.95.937-1.842 1.939-2.846 2.82c-.048-4.357-.025-8.717-.011-13.076a94 94 0 0 0 .01-1.896m14.193 11.423c-.056 3.204-.005 6.41-.026 9.613c.049.78-.59 1.482-1.34 1.591c-.615.1-1.134-.312-1.667-.54c-1.856-.922-3.947-1.303-6.007-1.237c-2.828.128-5.57 1.266-7.773 3.027c-.634-.383-1.204-.864-1.844-1.237c-2.305-1.342-5.013-2.06-7.68-1.782c-1.81.133-3.541.78-5.139 1.618c-.978.555-2.295-.33-2.216-1.44c-.015-6.165 0-12.332-.008-18.497c-.023-.585.105-1.267.643-1.597c4.014-2.226 8.99-2.58 13.294-1.016c1.011.292 1.917.84 2.865 1.283c.904-.367 1.77-.883 2.705-1.21m-2.705 2.7c.045 5.475.066 13.397.085 18.872M7.597 20.59H18.16M7.597 30.027h3.521M7.597 22.95h4.695m-4.695 2.36H18.16m-3.52 2.358h3.52m-10.563 0h4.695m2.347-4.718h3.521m-4.694 7.077h4.694m10.564-16.513h10.563m-10.563 2.359h4.695m-4.695 2.359h10.563m-3.521 2.359h3.521m-10.563 0h4.695m2.347-4.718h3.521"
          />
        </svg>
      ),
      score: 9
    },
    {
      title: 'LISTENING',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            d="M2 22L.5 23.5M5 19l-1.5 1.5m4.5-2L5.5 16m4.5-2l-1.5 1.5M13 11l-1.5 1.5M19 .5A4.5 4.5 0 0 1 23.5 5M19 3.5A1.5 1.5 0 0 1 20.5 5m-15 4a6.5 6.5 0 0 1 13 0c0 .662-.111 1.32-.328 1.944l-2.85 8.195A3.52 3.52 0 0 1 12 21.5c-.98 0-1.865-.352-2.5-1m6-11.5a3.5 3.5 0 1 0-7 0"
          />
        </svg>
      ),
      score: 9
    },
    {
      title: 'WRITING',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 64 64">
          <path
            fill="currentColor"
            d="M55.339 30.79c-2.519-1.382-11.341-4.241-18.681-6.38l5.328-5.503l.578.599l1.273-1.314l-.578-.6l3.684-3.807l-.705-.73l3.684-3.805L46.778 6l-3.685 3.806l-.709-.73l-3.687 3.806l-1.38-1.424l-8.511 8.802l1.073 1.113l7.221-7.466l.316.3l-7.795 8.051c-7.035-3.226-9.701.335-13.346 5.255c-1.995 2.692-4.479 6.044-8.344 9.308c-1.264 1.065-2.559 2.899-2.4 4.853c.078.97.574 2.344 2.356 3.55l-3.794 7.037L2 54.427l1.036 1.071l2.103-2.171l4.873-2.797c.909 1.213 2.311 2.074 3.742 2.215c3.441.344 6.357 1.625 9.178 2.864C25.729 56.839 28.37 58 31.128 58c3.637 0 6.477-.493 9.482-1.016c3.901-.677 8.323-1.444 15.791-1.444c2.778 0 4.736-2.27 5.372-6.224c1.123-6.956-2.065-16.132-6.434-18.526M26.007 41.379c-.959-.442-1.871-.861-2.623-1.137c-.055-.02-.116-.037-.171-.057c.432-.677 1.31-1.824 3.042-3.444c-.131 1.918-.21 3.691-.248 4.638m16.378-30.508l2.822 2.914l-2.816 2.908l-2.822-2.914zm-4.091 4.225l2.822 2.914l-20.901 21.588c-2.745-.175-6.041.573-8.878 3.343zM9.236 38.367c4.085-3.368 6.606-6.871 8.664-9.647c3.544-4.783 5.396-7.568 10.644-5.348l-18.53 19.141c-.917-.541-3.09-2.24-.778-4.146M5.965 51.405l2.959-5.508l.255.263a4.76 4.76 0 0 0 .161 3.206zm54.381-2.683c-.271 1.688-2.309 3.986-4.612 3.986c-7.643 0-11.49 1.126-15.48 1.772c-7.724 1.249-13.457-.34-15.953-1.931c-6.256-3.986-9.667-1.93-12.542-4.145c-.925-.713-.842-2.455.063-3.544c4-4.802 9.208-3.997 10.898-3.195c4.865 2.31 9.289 2.65 10.472 2.392c1.185-.242 2.233-.886 3.051-1.693c-.93.683-2.016 1.133-3.124 1.192c-1.105.077-4.287-.916-4.826-1.147c-.195-.957-.509-2.663-.538-3.914c1.994 2.033 4.186 2.549 4.186 2.549l-4.265-5.624s6.24-6.871 10.392-8.98c6.99 2.052 14.336 4.354 16.45 5.514c3.598 1.971 6.798 10.756 5.828 16.768"
          />
        </svg>
      ),
      score: 9
    },
    {
      title: 'SPEAKING',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="21.5"
            fill="none"
            stroke="currentColor"
            stroke-dasharray="1 4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M24 6.233a7.61 7.61 0 0 1 7.61 7.61v9.42a7.61 7.61 0 0 1-15.22 0v-9.42A7.61 7.61 0 0 1 24 6.233m2.94 28.65v6.245a.64.64 0 0 1-.63.64h-4.62a.64.64 0 0 1-.63-.64v-6.245"
          />
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.23 25.523a12 12 0 0 0 23.54 0" />
          <path fill="none" stroke="currentColor" stroke-linecap="round" d="M24 6.233v6.447m2.867-5.756v5.756m-5.734-5.685v5.685" />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M20.07 19.516h2.524s.281-2.565-1.278-2.565s-1.247 2.565-1.247 2.565Z"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M25.377 19.177a1.378 1.378 0 1 1 2.662-.713"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            d="M20.53 24.7c.855 1.726 3.597 3.35 5.308.06c.603-1.16.935-1.919 1.177-1.96c.15-.025.456.63.456.63"
          />
        </svg>
      ),
      score: 9
    }
  ];

  return (
    <div className="flex gap-2 items center">
      {scoreSkills.map((item, index: number) => (
        <ReviewCard
          onClick={() => onDispatchAction({ type: 'SELECT_REVIEW_SKILL', payload: item.title as unknown as QuestionType })}
          icon={item.icon}
          score={item.score}
          title={item.title}
          key={index}
        />
      ))}
    </div>
  );
};

type ReviewCardProps = {
  title: string;
  score: number;
  icon: React.ReactNode;
  onClick: () => void;
};
const ReviewCard = ({ title, score, icon, onClick }: ReviewCardProps) => {
  return (
    <div onClick={onClick} className="shadow rounded-md p-4 bg-white cursor-pointer hover:bg-blue-50">
      <div className="flex gap-4 items-center">
        <div className="bg-green-50 p-4 rounded-md">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2">{score}</h3>
          <h3 className="text-md text-gray-500">{title}</h3>
        </div>
      </div>
    </div>
  );
};
