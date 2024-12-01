import React from "react";

type SkeletonLoaderProps = {
  count?: number;
  skeletonComponent: React.ComponentType;
};

function SkeletonLoader({
  count = 5,
  skeletonComponent: SkeletonComponent,
}: SkeletonLoaderProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonComponent key={index} />
      ))}
    </>
  );
}

export default SkeletonLoader;
