import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, LibraryScreen, SearchScreen } from "../screens";
import { routes } from "./routes";
import { TabIcon } from "../components/TabIcon";
import { colors } from "../themes/colors";
import { hp } from "utils";

const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.black_01,
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
          height: hp(50),
          borderWidth: 0,
        },
        tabBarActiveTintColor: colors.white_01,
      }}
      sceneContainerStyle={{ backgroundColor: colors.black_01 }}>
      <Tab.Screen
        name={routes.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="home" active={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.search}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="search1" active={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.library}
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="bookshelf" active={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
