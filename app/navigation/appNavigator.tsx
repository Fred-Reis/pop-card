import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "@/views/Login";
import { useUserStore } from "@/store";

import { MyTabs } from "./tabs";
import { CardDetails } from "@/views/CardDetails";
import { Header } from "./components/Header";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  const { user } = useUserStore();

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route }) => <Header title={route.name} />,
      }}
    >
      {user ? (
        <Stack.Group>
          <Stack.Screen
            name="TabHome"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="CardDetails" component={CardDetails} />
        </Stack.Group>
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};
