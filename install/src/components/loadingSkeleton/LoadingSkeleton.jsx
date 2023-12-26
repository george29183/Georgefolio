import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col  g w-full h-screen">
      <div className="animate-pulse">
        <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 h-60 w-full rounded-lg p-4 mb-4">
          <Skeleton height={7000} width={2000} />
        </div>
        <div className="bg-gray-300  h-[70%] mx-auto w-[70%]  rounded-lg p-2 mb-2">
          <Skeleton height={300} width={400} />
        </div>
        <div className="bg-gray-300 mt-4 h-[70%] mx-auto w-[70%] rounded-lg p-2">
          <Skeleton height={300} width={300} />
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
