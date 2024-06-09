import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useUserStore } from "@/store";

import { MyTabs } from "./tabs";
import { Header } from "./components/Header";
import { Login, CardDetails, SignUp } from "@/views";

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
          <Stack.Screen
            name="CardDetails"
            component={CardDetails}
            options={{
              title: "Detalhes do Cartão",
              header: ({ route }) => (
                <Header
                  title="Detalhe cartão"
                  color={route.params?.item?.color}
                />
              ),
            }}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              header: ({ route }) => <Header title="Cadastro" />,
            }}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
