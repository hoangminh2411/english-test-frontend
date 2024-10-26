import React from 'react';

type Step = {
  label: string;
  icon: JSX.Element; // You can pass an icon for each step
  completed: boolean;
};

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {steps.map((step, index) => {
        const isCompleted = step.completed || index < currentStep;
        const activeClass = isCompleted || currentStep == index ? 'text-blue-600' : '';
        return (
          <li
            key={index}
            className={`flex md:w-full items-center ${activeClass}  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
          >
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 gap-2">
              {isCompleted ? (
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              ) : (
                step.icon
              )}
              <span> {step.label}</span>
            </span>
          </li>
        );
      })}
    </ol>
  );
};

export default Stepper;
