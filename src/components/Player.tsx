import React from "react";
import { useSelector } from "react-redux";
import IIcon from "react-native-vector-icons/Ionicons";

import { IconContainer } from "./IconContainer";
import { wp } from "utils";
import { colors } from "themes";
import { usePlayer } from "hooks";

interface IPlayer {
  callback?: () => any;
  track: {};
}

export const Player = ({ callback, track }: IPlayer) => {
  const { playing } = useSelector(state => state.player);

  const [_play] = usePlayer(track);

  return (
    <IconContainer size={56} onPress={_play}>
      {playing ? (
        <IIcon name="ios-pause-outline" size={wp(28)} color={colors.black_02} />
      ) : (
        <IIcon name="ios-play" size={wp(28)} color={colors.black_02} />
      )}
    </IconContainer>
  );
};
