import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { hp, wp } from "utils";
import { fonts, colors } from "themes";
import { routes } from "navigation/routes";
import { usePlayer } from "hooks";

export const Album = ({ album }: any) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [_play] = usePlayer(album);

  const _play2 = () => {
    _play();
  };

  return (
    <TouchableOpacity
      onPress={() =>
        album.album_type === "album"
          ? navigation.navigate(routes.appStack, {
              screen: routes.album,
              params: { id: album?.id },
            })
          : _play2()
      }>
      <FastImage
        source={{ uri: album?.images?.[0]?.url }}
        style={[
          styles.albumArt,
          { borderRadius: album.album_type !== "album" ? 105 / 2 : 0 },
        ]}
      />
      <Text
        style={[
          styles.title,
          { textAlign: album.album_type !== "album" ? "center" : "left" },
        ]}
        numberOfLines={1}>
        {album?.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  albumArt: {
    width: wp(105),
    height: hp(105),
    resizeMode: "contain",
    marginRight: 15,
  },
  title: {
    fontSize: wp(12),
    fontFamily: fonts.semiBold,
    color: colors.white_01,
    marginTop: 10,
    width: wp(105),
  },
});
