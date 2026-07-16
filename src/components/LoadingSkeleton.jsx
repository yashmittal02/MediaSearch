import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 py-10">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="h-80 rounded-xl bg-gray-800 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
