import React from "react";
import { View, ActivityIndicator } from "react-native";

import { wp } from "utils";
import { colors } from "themes";

export const Loading = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size={wp(35)} color={colors.green_01} />
    </View>
  );
};
