import { memo } from "react";
import { Text, View } from "react-native";

import { TransacionProps } from "@/types/transactionDTO";
import { formatCurrency, formatDate } from "@/utils/functions";

import { styles } from "./styles";

interface ItemProps {
  transaction: TransacionProps;
}

export const TransactionItem = memo(({ transaction }: ItemProps) => {
  return (
    <View style={styles.transactionContainer}>
      <Text style={styles.date}>{formatDate(transaction.date)}</Text>
      <Text style={styles.separator}>{"\u2502"}</Text>
      <Text style={styles.value}>{formatCurrency(transaction.value)}</Text>
      <Text style={styles.separator}>{"\u2502"}</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.stailments}>
          {transaction.details.stailments} parcelas de:{" "}
        </Text>
        <Text style={styles.stailments}>
          {formatCurrency(transaction.details.stailment_value)}
        </Text>
      </View>
    </View>
  );
});
