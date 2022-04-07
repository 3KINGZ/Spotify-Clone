import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "./routes";
import { NowPlayingScreen } from "../screens";

const Stack = createStackNavigator();

export const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.now_playing} component={NowPlayingScreen} />
    </Stack.Navigator>
  );
};
