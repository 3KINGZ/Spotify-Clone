import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

import { colors, fonts } from "themes";
import { wp } from "utils";

export const TopListen = ({ track }: any) => {
  return (
    <View style={{ marginRight: 15 }}>
      <FastImage
        source={{ uri: track?.images?.[0]?.url }}
        style={styles.icon}
      />
      <Text style={styles.name} numberOfLines={1}>
        {track?.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 154,
    height: 154,
    resizeMode: "contain",
    borderRadius: 154 / 2,
  },
  name: {
    fontSize: wp(14),
    fontFamily: fonts.regular,
    color: colors.white_01,
    width: wp(154),
    textAlign: "center",
    marginTop: 10,
  },
});
