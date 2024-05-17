import React, { useState } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import queryClient from "./server/api/queryClient";

import { AppNavigator } from "@/navigation";
import { Splash } from "@/views/Splash";

export default function App() {
  const [splashCompleted, setSplashCompleted] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    Alexandria: require("./assets/fonts/alexandria.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" />
      {splashCompleted ? (
        <AppNavigator />
      ) : (
        <Splash onComplete={setSplashCompleted} />
      )}
    </QueryClientProvider>
  );
}
