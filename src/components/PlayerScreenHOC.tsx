import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { NowPlayingModal } from "./NowPlayingModal";

export const PlayerScreenHOC = ({ children }: any) => {
  const { track, playing } = useSelector(state => state.player);

  return (
    <View style={{ flex: 1 }}>
      {children}
      {Object.keys(track).length > 0 ? (
        <View style={{ width: "100%" }}>
          <NowPlayingModal />
        </View>
      ) : null}
    </View>
  );
};
