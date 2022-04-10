import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "./routes";
import { NowPlayingScreen, AlbumScreen } from "screens";

const Stack = createStackNavigator();

export const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      <Stack.Screen name={routes.now_playing} component={NowPlayingScreen} />
      <Stack.Screen name={routes.album} component={AlbumScreen} />
    </Stack.Navigator>
  );
};
