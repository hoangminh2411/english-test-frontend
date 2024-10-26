import React, { forwardRef } from 'react';

type ChipProps = {
  label: string;
  color?: 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  active?: boolean;
};

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-800 border-blue-400',
  gray: 'bg-gray-100 text-gray-800 border-gray-500',
  red: 'bg-red-100 text-red-800 border-red-400',
  green: 'bg-green-100 text-green-800 border-green-400',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  indigo: 'bg-indigo-100 text-indigo-800 border-indigo-400',
  purple: 'bg-purple-100 text-purple-800 border-purple-400',
  pink: 'bg-pink-100 text-pink-800 border-pink-400'
};

const sizeClasses: Record<string, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-0.5',
  lg: 'text-base px-3 py-1'
};

const Chip = forwardRef<HTMLSpanElement, ChipProps>(({ label, color = 'blue', size = 'md', active = false, onClick }, ref) => {
  return (
    <span
      ref={ref}
      onClick={onClick}
      className={`
          ${colorClasses[color]} 
          ${sizeClasses[size]} 
          font-medium rounded border 
          ${active ? 'opacity-100' : 'opacity-75'}
          cursor-pointer transition-opacity duration-200
        `}
    >
      {label}
    </span>
  );
});

Chip.displayName = 'Chip';

export default Chip;
