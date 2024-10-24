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
    const baseStyles = 'font-medium rounded-lg focus:outline-none me-2 mb-2';

    // Define color styles based on props
    const colorClasses: Record<string, string> = {
      blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ',
      gray: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300',
      light: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100',
      green: 'text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300',
      red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300',
      yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300',
      purple: 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300'
    };

    // Define additional styles for variant and size
    const variantClasses: Record<string, string> = {
      solid: '',
      outline: 'bg-transparent border border-gray-200'
    };

    const sizeClasses: Record<string, string> = {
      small: 'text-xs px-3 py-2',
      medium: 'text-sm px-5 py-2.5',
      large: 'text-lg px-6 py-3'
    };

    // Combine classes
    const combinedClasses = `${baseStyles} ${colorClasses[color]} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
      <button ref={ref} type={type} className={combinedClasses} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
