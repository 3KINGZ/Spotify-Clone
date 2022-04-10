import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AIcon from "react-native-vector-icons/AntDesign";

import { colors, fonts } from "themes";
import { wp } from "utils";
import { IconContainer } from "./IconContainer";
import { Spacer } from "./Spacer";
import { getArtist } from "helpers";

export const Track = ({ track }: any) => {
  return (
    <TouchableOpacity>
      <View>
        <Text>{track?.name}</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconContainer size={13}>
            <AIcon name="arrowdown" color={colors.black_01} size={wp(8)} />
          </IconContainer>

          <Spacer space={5} />

          <Text numberOfLines={1}>{getArtist(track.artists)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  trackName: {
    fontSize: wp(17),
    fontFamily: fonts.medium,
  },
});
