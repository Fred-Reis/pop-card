import { memo } from "react";
import { Text, View } from "react-native";

import { TransacionProps } from "@/types/transactionDTO";

import { styles } from "./styles";

interface ItemProps {
  transaction: TransacionProps;
}

export const TransactionItem = memo(({ transaction }: ItemProps) => {
  console.log(transaction);

  return (
    <View style={styles.transactionContainer}>
      <Text style={styles.date}>
        {new Date(transaction.date).toLocaleDateString("pt-BR")}
      </Text>
      <Text style={styles.date}>{transaction.description}</Text>
      <Text style={styles.date}>{transaction.value}</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.text}>em {transaction.details.stailments} X </Text>
        <Text style={styles.text}>
          de{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(transaction.details.stailment_value)}
        </Text>
      </View>
    </View>
  );
});
