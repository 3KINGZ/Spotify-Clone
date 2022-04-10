import { View, Text } from "react-native";
import React from "react";

interface ISpacer {
  space: number;
  vertical?: boolean;
}

export const Spacer = ({ space, vertical }: ISpacer) => {
  return (
    <View
      style={{
        marginHorizontal: vertical ? 0 : space,
        marginVertical: vertical ? space : 0,
      }}
    />
  );
};
