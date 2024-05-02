import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

import { useFonts } from "expo-font";
import { AppNavigator } from "@/navigation";
import { Splash } from "./views/Splash";
import { Home } from "./views/Home";

Splash;

export default function App() {
  const [splashCompleted, setSplashCompleted] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    Alexandria: require("./assets/fonts/alexandria.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      {splashCompleted ? (
        <AppNavigator />
      ) : (
        // <Home />
        <Splash onComplete={setSplashCompleted} />
      )}
    </>
  );
}
