import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { useDispatch, useSelector } from "react-redux";
import SIcon from "react-native-vector-icons/SimpleLineIcons";
import EIcon from "react-native-vector-icons/Entypo";
import AIcon from "react-native-vector-icons/AntDesign";
import FIcon from "react-native-vector-icons/Feather";

import { fetchAlbumDetail } from "store/slices/content.slice";
import { colors, fonts } from "themes";
import { hp, wp } from "utils";
import { getImageUrl } from "helpers";
import { IconContainer, Player, Spacer } from "components";

export const AlbumScreen = ({ route, navigation }: any) => {
  const { id } = route.params;

  const dispatch = useDispatch();

  const { album, albumLoading } = useSelector(state => state.content);

  console.log("alb det", album);

  useEffect(() => {
    dispatch(fetchAlbumDetail(id));
  }, []);

  console.log("fg", getImageUrl(album?.artists?.[0]?.id));

  return (
    <View style={styles.container}>
      <SIcon name="arrow-left" color={colors.white_01} size={wp(17)} />
      <FastImage
        source={{ uri: album?.images?.[0]?.url }}
        style={styles.albumArt}
      />

      <View style={{ marginTop: 20 }}>
        <Text style={styles.albumName}>{album?.name}</Text>

        <View style={styles.artistContainer}>
          <Text style={styles.artistName}>{album?.artists?.[0]?.name}</Text>
        </View>

        <Spacer vertical space={10} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.subText}>Album</Text>
              <Spacer space={3} />
              <EIcon name="dot-single" size={wp(7)} color={colors.white_01} />
              <Spacer space={3} />
              <Text style={styles.subText}>
                {new Date(album?.release_date).getFullYear()}
              </Text>
            </View>

            <Spacer vertical space={5} />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AIcon name="hearto" size={wp(18)} color={colors.white_01} />

              <Spacer space={7} />

              <IconContainer size={21}>
                <AIcon name="arrowdown" color={colors.black_02} size={wp(14)} />
              </IconContainer>

              <Spacer space={7} />

              <FIcon
                name="more-horizontal"
                color={colors.white_01}
                size={wp(16)}
              />
            </View>
          </View>

          <Player />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_01,
    padding: 15,
  },
  albumArt: {
    width: wp(234),
    height: hp(236),
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 15,
  },
  albumName: {
    fontSize: wp(25),
    fontFamily: fonts.semiBold,
    color: colors.white_01,
  },
  artistName: {
    fontSize: wp(14),
    fontFamily: fonts.semiBold,
    color: colors.white_01,
  },
  artistContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  artistImage: {
    width: 23,
    height: 23,
    borderRadius: 23 / 2,
    resizeMode: "contain",
  },
  subText: {
    fontSize: wp(13),
    fontFamily: fonts.regular,
    color: colors.white_01,
  },
});
