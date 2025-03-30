import React from "react";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen space-x-2">
      <span className="loading text-red-200 loading-ball loading-xs"></span>
      <span className="loading loading-ball text-red-500 loading-sm"></span>
      <span className="loading loading-ball text-sky-500 loading-md"></span>
      <span className="loading loading-ball text-blue-700 loading-lg"></span>
      <span className="loading loading-ball text-orange-500 loading-xl"></span>
    </div>
  );
};
