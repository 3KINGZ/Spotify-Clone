import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "themes";

interface IIconContainer {
  children: Element;
  size: number;
  onPress?: () => any;
}

export const IconContainer = ({ children, size, onPress }: IIconContainer) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_01,
    alignItems: "center",
    justifyContent: "center",
  },
});
