import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { RootStackNavigator } from "./src/navigation/RootStackNavigator";
import { store } from "store/store";
import { navigationRef } from "utils/navigation";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
