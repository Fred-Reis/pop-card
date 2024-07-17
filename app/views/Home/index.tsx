import { SafeAreaView, StyleSheet, Text } from "react-native";

import { Balance, MainCard, CardList, ServiceList } from "@/components";

import { useUserStore } from "@/store";

import { styles } from "./styles";
import { ServiceProps } from "@/components/ServicesList";

const DATA: ServiceProps[] = [
  {
    link: "credit-card",
    icon: require("../../assets/icons/user.png"),
  },
  {
    link: "credit-card",
    icon: require("../../assets/icons/user.png"),
  },
  {
    link: "credit-card",
    icon: require("../../assets/icons/user.png"),
  },
  {
    link: "credit-card",
    icon: require("../../assets/icons/user.png"),
  },
  {
    link: "credit-card",
    icon: require("../../assets/icons/user.png"),
  },
  {
    link: "credit-card",
    icon: require("../../assets/icons/user.png"),
  },
  {
    link: "credit-card",
    icon: require("../../assets/icons/user.png"),
  },
  {
    link: "credit-card",
    icon: require("../../assets/icons/user.png"),
  },
  {
    link: "credit-card",
    icon: require("../../assets/icons/user.png"),
  },
];
export const Home = () => {
  const { user } = useUserStore();

  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>
      <Text style={styles.greating}>Olá {user.name}</Text>
      <Text style={styles.message}>Seu Limite</Text>
      <Balance value={user.balance} />
      <MainCard number={user.main_card_number.slice(-4)} />
      <CardList data={user.cards} />
      <ServiceList data={DATA} />
    </SafeAreaView>
  );
};
