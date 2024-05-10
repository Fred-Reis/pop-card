import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MyTabs } from "./tabs";
import { Login } from "@/views/Login";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="TabHome" component={MyTabs} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
