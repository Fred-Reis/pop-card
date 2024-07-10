import { Text, View } from "react-native";

import { styles } from "./styles";

type BalanceProps = {
  value: number;
};

export const Balance = ({ value }: BalanceProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.currency}>R$</Text>
      <Text style={styles.value}>
        {new Intl.NumberFormat("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value)}
      </Text>
    </View>
  );
};
