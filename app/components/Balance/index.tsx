import { Text, View } from "react-native";

import { styles } from "./styles";

type BalanceProps = {
  value: string;
};

export const Balance = ({ value }: BalanceProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.currency}>R$</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
