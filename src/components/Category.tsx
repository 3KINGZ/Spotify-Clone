import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

import { colors, fonts } from "themes";
import { wp, hp } from "utils";

export const Category = ({ category }: any) => {
  return (
    <View style={{ marginRight: 15 }}>
      <FastImage
        source={{ uri: category?.icons?.[0]?.url }}
        style={styles.icon}
      />
      <Text style={styles.name} numberOfLines={1}>
        {category?.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: wp(154),
    height: hp(154),
    resizeMode: "contain",
  },
  name: {
    fontSize: wp(14),
    fontFamily: fonts.regular,
    color: colors.white_01,
  },
});
