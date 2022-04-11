import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import IIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { colors, fonts } from "themes";
import { wp, hp } from "utils";
import { getArtist } from "helpers";
import { Spacer } from "./Spacer";
import { routes } from "navigation/routes";
import { usePlayer } from "hooks";

export const NowPlayingModal = () => {
  const { track, playing } = useSelector(state => state.player);
  const navigation = useNavigation();
  const [_play] = usePlayer(track);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() =>
          navigation.navigate(routes.appStack, { screen: routes.now_playing })
        }>
        <FastImage
          source={{ uri: track?.images?.[0]?.url }}
          style={styles.songArt}
        />
        <Spacer space={5} />
        <View>
          <Text style={styles.name}>{track?.name}</Text>
          <Text style={styles.artist}>{getArtist(track?.artists)}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={_play}>
        {playing ? (
          <IIcon
            name="ios-pause-outline"
            size={wp(20)}
            color={colors.white_01}
          />
        ) : (
          <IIcon name="ios-play" size={wp(20)} color={colors.white_01} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.black_01,
  },
  songArt: {
    width: wp(39),
    height: hp(40),
    borderRadius: 8,
    resizeMode: "contain",
  },
  name: {
    fontSize: wp(14),
    fontFamily: fonts.semiBold,
    color: colors.white_01,
  },
  artist: {
    fontSize: wp(12),
    fontFamily: fonts.medium,
    color: colors.grey_01,
  },
});
