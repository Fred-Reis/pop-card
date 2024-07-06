import { View } from "react-native";

import { FundsCardList } from "./components/FundsCardList";
import { useUserStore } from "@/store";

import { styles } from "./styles";

export const AddFunds = () => {
  const { user } = useUserStore();

  return (
    <View style={styles.container}>
      <FundsCardList data={user.cards} />
    </View>
  );
};
