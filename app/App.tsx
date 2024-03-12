import React from "react";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Home } from "./views/Home";
import { MyTabs } from "./navigation/tabs";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Alexandria: require("./assets/fonts/alexandria.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MyTabs />
    </NavigationContainer>
  );
}
