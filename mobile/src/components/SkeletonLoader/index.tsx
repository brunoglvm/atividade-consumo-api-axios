import React from "react";
import { FlatList } from "react-native";

type SkeletonLoaderProps = {
  count: number;
  skeletonComponent: React.ElementType;
};

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  count,
  skeletonComponent: SkeletonComponent,
}) => {
  const skeletonData = Array.from({ length: count }, (_, index) => ({
    key: index.toString(),
  }));

  return (
    <FlatList
      data={skeletonData}
      keyExtractor={(item) => item.key}
      renderItem={() => <SkeletonComponent />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SkeletonLoader;
