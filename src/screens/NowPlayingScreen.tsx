import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SIcon from "react-native-vector-icons/SimpleLineIcons";
import FIcon from "react-native-vector-icons/Feather";
import IIcon from "react-native-vector-icons/Ionicons";
import MIIcon from "react-native-vector-icons/MaterialIcons";
import AIcon from "react-native-vector-icons/AntDesign";

import { useGetDominantColors, usePlayer } from "hooks";
import { colors, fonts } from "themes";
import { useSelector } from "react-redux";
import FastImage from "react-native-fast-image";
import { wp, hp } from "utils";
import { getArtist } from "helpers";

export const NowPlayingScreen = ({ navigation }) => {
  const { track, playing } = useSelector(state => state.player);

  const songArt = track?.images?.[0]?.url;
  const [albumColor, albumColorLoading] = useGetDominantColors(songArt, track);

  const [_play] = usePlayer(track);

  return (
    <LinearGradient
      style={styles.container}
      colors={[
        albumColor.colorOne.value || colors.black_01,
        albumColor.colorThree.value || colors.black_01,
        albumColor.colorFour.value || colors.black_01,
      ]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SIcon name="arrow-down" size={wp(21)} />
        </TouchableOpacity>
        <Text style={styles.albumName}>{track?.name}</Text>
        <TouchableOpacity>
          <FIcon name="more-horizontal" size={wp(21)} />
        </TouchableOpacity>
      </View>

      <FastImage
        source={{ uri: track?.images?.[0]?.url }}
        style={styles.songArt}
      />

      <View>
        <Text style={styles.name}>{track?.name}</Text>
        <Text style={styles.artist}>{getArtist(track?.artists)}</Text>
      </View>

      <View>
        <View
          style={{
            width: "100%",
            height: hp(5),
            backgroundColor: colors.grey_01,
          }}>
          <View
            style={{
              width: "50%",
              height: "100%",
              backgroundColor: colors.white_01,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}>
          <Text>0:38</Text>
          <Text>-1:18</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}>
        <IIcon name="ios-shuffle" size={wp(22)} color={colors.white_01} />
        <IIcon
          name="play-skip-back-sharp"
          size={wp(36)}
          color={colors.white_01}
        />
        <TouchableOpacity
          onPress={_play}
          style={{
            width: wp(67),
            height: hp(67),
            borderRadius: 68 / 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.white_01,
          }}>
          {playing ? (
            <IIcon
              name="ios-pause-outline"
              size={wp(36)}
              color={colors.black_01}
            />
          ) : (
            <IIcon
              name="ios-play-outline"
              size={wp(36)}
              color={colors.black_01}
            />
          )}
        </TouchableOpacity>
        <IIcon
          name="ios-play-skip-forward-sharp"
          size={wp(36)}
          color={colors.white_01}
        />
        <IIcon name="ios-repeat" size={wp(22)} color={colors.white_01} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <AIcon name="upload" size={wp(22)} color={colors.white_01} />
        <MIIcon name="playlist-play" size={wp(22)} color={colors.white_01} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  albumName: {
    fontSize: wp(14),
    fontFamily: fonts.semiBold,
    color: colors.white_01,
  },
  songArt: {
    width: "100%",
    height: hp(380),
    alignSelf: "center",
  },
  name: {
    fontSize: wp(22),
    color: colors.white_01,
    fontFamily: fonts.semiBold,
  },
  artist: {
    fontSize: wp(16),
    color: colors.grey_01,
    fontFamily: fonts.medium,
  },
});
