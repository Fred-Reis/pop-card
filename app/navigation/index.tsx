import React from "react";
import { useColorScheme } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { darkTheme, defaultTheme } from "@/styles/theme";

import { AppStack } from "./appNavigator";
import { DrawerStack } from "./drawerNavigator";

export const AppNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? darkTheme : defaultTheme}
    >
      <DrawerStack />
    </NavigationContainer>
  );
};
