import { FlatList, Text, View } from "react-native";

import { TransactionItem } from "../TransactionItem";
import { TransacionProps } from "@/types/transactionDTO";

import { styles } from "./styles";

interface Props {
  data: TransacionProps[];
}

export const TransactionsList = ({ data }: Props) => {
  return (
    <>
      <Text style={styles.title}>Últimas Transações</Text>

      <Label />

      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={data}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        showsVerticalScrollIndicator={false}
        decelerationRate={"fast"}
        bounces={false}
        style={styles.list}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      />
    </>
  );
};

const Label = () => (
  <View style={styles.labelContainer}>
    <Text style={styles.label}>Data</Text>
    <Text style={styles.label}>{"\u2502"}</Text>
    <Text style={styles.label}>Valor</Text>
    <Text style={styles.label}>{"\u2502"}</Text>
    <Text style={styles.label}>Parcelas</Text>
  </View>
);
