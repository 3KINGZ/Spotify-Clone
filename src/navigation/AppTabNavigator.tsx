import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, LibraryScreen, SearchScreen } from "../screens";
import { routes } from "./routes";

const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={routes.home} component={HomeScreen} />
      <Tab.Screen name={routes.search} component={SearchScreen} />
      <Tab.Screen name={routes.library} component={LibraryScreen} />
    </Tab.Navigator>
  );
};
