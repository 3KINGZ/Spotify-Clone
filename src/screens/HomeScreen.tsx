import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../themes/colors";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black_01,
    flex: 1,
  },
  title: {
    color: colors.white_01,
  },
});
