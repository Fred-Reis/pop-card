import { FlatList, Text } from "react-native";

import { TransactionItem } from "../TransactionItem";
import { TransacionProps } from "@/types/transactionDTO";

import { styles } from "./styles";

interface Props {
  data: TransacionProps[];
}

export const TransactionsList = ({ data }: Props) => {
  return (
    <>
      <Text style={styles.title}>Transações</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        showsVerticalScrollIndicator={false}
        // snapToAlignment="start"
        decelerationRate={"fast"}
        // snapToInterval={160}
        bounces={false}
        style={styles.list}
        contentContainerStyle={
          {
            // paddingRight: 20,
          }
        }
      />
    </>
  );
};
