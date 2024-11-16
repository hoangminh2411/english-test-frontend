import { ReactNode } from 'react';

import Spinner from './Spinner';

//components

interface LoadingWrapperProps {
  children?: ReactNode;
  isLoading?: boolean;
}
const LoadingWrapper = ({ children, isLoading = false }: LoadingWrapperProps) => {
  return (
    <div
      style={{
        position: 'relative',
        ...(isLoading && {
          opacity: 0.5,
          pointerEvents: 'none'
        })
      }}
    >
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex: '99'
          }}
        >
          <Spinner size="md" />
        </div>
      )}
      {children}
    </div>
  );
};

export default LoadingWrapper;
