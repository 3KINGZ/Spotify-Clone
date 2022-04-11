import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AIcon from "react-native-vector-icons/AntDesign";
import FIcon from "react-native-vector-icons/Feather";

import { colors, fonts } from "themes";
import { wp } from "utils";
import { IconContainer } from "./IconContainer";
import { Spacer } from "./Spacer";
import { getArtist } from "helpers";
import { usePlayer } from "hooks";

export const Track = ({ track }: any) => {
  const [_play] = usePlayer(track);

  return (
    <TouchableOpacity style={styles.container} onPress={_play}>
      <View style={{ width: "90%" }}>
        <Text style={styles.trackName} numberOfLines={1}>
          {track?.name}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconContainer size={13}>
            <AIcon name="arrowdown" color={colors.black_01} size={wp(8)} />
          </IconContainer>

          <Spacer space={2} />

          <Text numberOfLines={1} style={styles.artists}>
            {getArtist(track.artists)}
          </Text>
        </View>
      </View>

      <FIcon name="more-horizontal" color={colors.grey_02} size={wp(17)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trackName: {
    fontSize: wp(17),
    fontFamily: fonts.medium,
    color: colors.white_01,
  },
  artists: {
    fontSize: wp(14),
    fontFamily: fonts.medium,
    color: colors.grey_01,
  },
});
