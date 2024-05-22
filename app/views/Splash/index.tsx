import { useEffect } from "react";

import { LogBox, StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import BootSplash from "react-native-bootsplash";
import LottieView from "lottie-react-native";

import { styles } from "./styles";
import { useFetchAllCards, useFetchAllUsers } from "@/server/queries";
import { useCardListStore, useUsersListStore } from "@/store/backEndDataStore";

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

  /**
   *  THAT'S A PROVISIONAL SOLUTION
   */

  const { data: cards, isLoading: cardsLoading } = useFetchAllCards();
  const { data: users, isLoading: userLoading } = useFetchAllUsers();

  const { setAllCardsList, setIsLoading } = useCardListStore();
  const { setAllUsersList, setIsLoading: setUserLoading } = useUsersListStore();

  useEffect(() => {
    if (!cardsLoading && !userLoading) {
      setIsLoading(cardsLoading);
      setAllCardsList(cards);
      setAllUsersList(users);
      setUserLoading(userLoading);
    }
  }, [cardsLoading, userLoading]);

  /**
   *
   */

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
