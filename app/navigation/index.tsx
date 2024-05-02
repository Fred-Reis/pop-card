import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./appNavigator";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
