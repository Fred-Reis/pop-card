import { LogBox, StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import BootSplash from "react-native-bootsplash";
import LottieView from "lottie-react-native";

import { styles } from "./styles";

interface Props {
  onComplete: (x: boolean) => void;
}

export const Splash = ({ onComplete }: Props) => {
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
        style={styles.container}
      >
        <LottieView
          onAnimationLoaded={onAnimationLoaded}
          onAnimationFinish={onCompleted}
          autoPlay
          loop={false}
          speed={1.2}
          style={styles.animation}
          source={require("@/assets/animation.json")}
        />
        <Text style={styles.message}>Tudo posso naqule que me fortalece.</Text>
      </LinearGradient>
    </View>
  );
};
