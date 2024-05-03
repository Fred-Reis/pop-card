import React, { useRef } from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import BootSplash from "react-native-bootsplash";
import LottieView from "lottie-react-native";

export const Splash = ({ onComplete }) => {
  LogBox.ignoreAllLogs();

  async function onAnimationLoaded() {
    await BootSplash.hide({ fade: true });
  }

  function onCompleted() {
    onComplete(true);
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <LinearGradient
        colors={["rgba(48,249,201,0.8)", "rgba(239,144,55,0.8)"]}
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <LottieView
          onAnimationLoaded={onAnimationLoaded}
          onAnimationFinish={onCompleted}
          autoPlay
          loop={false}
          speed={1.2}
          style={{
            width: 550,
            height: 2500,
            backgroundColor: "transparent",

            marginTop: 200,
          }}
          source={require("@/assets/animation.json")}
        />
        <Text
          style={{
            fontSize: 14,
            textAlign: "center",
            position: "absolute",
            bottom: 25,
            marginHorizontal: 25,
            color: "#fff",
          }}
        >
          Tudo posso naqule que me fortalece.
        </Text>
      </LinearGradient>
    </View>
  );
};
