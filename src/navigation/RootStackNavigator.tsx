import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "./routes";
import { AppStackNavigator } from "./AppStackNavigator";
import { AppTabNavigator } from "./AppTabNavigator";

const Stack = createStackNavigator();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      <Stack.Screen name={routes.appTab} component={AppTabNavigator} />
      <Stack.Screen name={routes.appStack} component={AppStackNavigator} />
    </Stack.Navigator>
  );
};
