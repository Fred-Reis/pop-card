import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useUserStore } from "@/store";

import { MyTabs } from "./tabs";
import { Header } from "./components/Header";
import { Login, CardDetails, SignUp, Account } from "@/views";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  const { user } = useUserStore();

  return (
    <Stack.Navigator>
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
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              title: "Minha Conta",
              header: ({ route }) => (
                <Header title="Minha Conta" color={route.params?.item?.color} />
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
