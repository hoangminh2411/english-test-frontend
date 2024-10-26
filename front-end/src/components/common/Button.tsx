import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  color?: 'blue' | 'gray' | 'light' | 'green' | 'red' | 'yellow' | 'purple';
  variant?: 'solid' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', type = 'button', color = 'blue', variant = 'solid', size = 'medium', onClick, ...props }, ref) => {
    // Base styles
    const baseStyles = 'font-medium rounded-lg focus:outline-none';

    // Define color styles for solid variant
    const colorClasses: Record<string, string> = {
      blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300',
      gray: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300',
      light: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100',
      green: 'text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300',
      red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300',
      yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300',
      purple: 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300'
    };

    // Define outline styles, setting the text color and border
    const outlineColorClasses: Record<string, string> = {
      blue: 'text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300',
      gray: 'text-gray-800 border border-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300',
      light: 'text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100',
      green: 'text-green-700 border border-green-700 hover:bg-green-100 focus:ring-4 focus:ring-green-300',
      red: 'text-red-700 border border-red-700 hover:bg-red-100 focus:ring-4 focus:ring-red-300',
      yellow: 'text-yellow-400 border border-yellow-400 hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300',
      purple: 'text-purple-700 border border-purple-700 hover:bg-purple-100 focus:ring-4 focus:ring-purple-300'
    };

    // Define size classes
    const sizeClasses: Record<string, string> = {
      small: 'text-xs px-3 py-2',
      medium: 'text-sm px-5 py-2.5',
      large: 'text-lg px-6 py-3'
    };

    // Apply the correct styles based on variant
    const combinedClasses = `${baseStyles} ${variant === 'outline' ? outlineColorClasses[color] : colorClasses[color]} ${sizeClasses[size]} ${className}`;

    return (
      <button ref={ref} type={type} className={combinedClasses} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
