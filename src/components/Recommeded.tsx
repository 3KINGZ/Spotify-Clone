import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

import { colors, fonts } from "themes";
import { wp, hp } from "utils";

export const Recommended = ({ recommended }: any) => {
  return (
    <View style={{ marginRight: 15 }}>
      <FastImage
        source={{ uri: recommended?.album?.images?.[0]?.url }}
        style={styles.icon}
      />
      <Text style={styles.name} numberOfLines={1}>
        {recommended?.name}
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
    width: wp(154),
    marginTop: 10,
  },
});
