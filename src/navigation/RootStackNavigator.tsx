import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "./routes";
import { AppStackNavigator } from "./AppStackNavigator";
import { AppTabNavigator } from "./AppTabNavigator";
import { AuthScreen, SplashScreen } from "../screens";
import { getValue } from "utils";

const Stack = createStackNavigator();

export const RootStackNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuthState = async () => {
    const tk = await getValue("@token");
    if (tk) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuthState();
  });

  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      {loading ? (
        <Stack.Screen name={routes.splash} component={SplashScreen} />
      ) : isAuthenticated && !loading ? (
        <>
          <Stack.Screen name={routes.appTab} component={AppTabNavigator} />
          <Stack.Screen name={routes.appStack} component={AppStackNavigator} />
        </>
      ) : (
        <Stack.Screen name={routes.auth} component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
};
