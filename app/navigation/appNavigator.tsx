import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "@/views/Login";
import { useUserStore } from "@/store";

import { MyTabs } from "./tabs";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  const { user } = useUserStore();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName="Login"
    >
      {user ? (
        <Stack.Group>
          <Stack.Screen name="TabHome" component={MyTabs} />
        </Stack.Group>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};
