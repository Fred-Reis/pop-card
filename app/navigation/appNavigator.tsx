import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MyTabs } from "./tabs";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="TabHome"
    >
      <Stack.Screen name="TabHome" component={MyTabs} />
    </Stack.Navigator>
  );
};
