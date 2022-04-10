import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IIcon from "react-native-vector-icons/Ionicons";

import { play } from "store/slices/player.slice";
import { IconContainer } from "./IconContainer";
import { wp } from "utils";
import { colors } from "themes";

interface IPlayer {
  callback?: () => any;
}

export const Player = ({ callback }: IPlayer) => {
  const dispatch = useDispatch();

  const { playing } = useSelector(state => state.player);

  const _play = () => {
    dispatch(play());
    callback && callback();
  };

  return (
    <IconContainer size={56} onPress={_play}>
      {playing ? (
        <IIcon name="ios-play" size={wp(28)} color={colors.black_02} />
      ) : (
        <IIcon name="ios-pause-outline" size={wp(28)} color={colors.black_02} />
      )}
    </IconContainer>
  );
};
