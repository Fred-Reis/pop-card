import { View, Text } from "react-native";

import { useRoute } from "@react-navigation/native";

import { styles } from "./styles";
import { MainCard } from "@/components";

import { TransactionsList } from "./components/TransactionsList";

const transactions = [
  {
    id: "1",
    user_id: "1",
    card_id: "1",
    type: "1",
    value: "100.50",
    date: "2022-09-01T00:00:00.000Z",
    description: "Pagamento de boleto",
    currency: "BRL",
    status: "1",
    details: {
      stailments: "10",
      stailment_value: "11.50",
      first_stailment_date: "2022-09-01T00:00:00.000Z",
    },
  },
  {
    id: "1",
    user_id: "1",
    card_id: "1",
    type: "1",
    value: "100.50",
    date: "2022-09-01T00:00:00.000Z",
    description: "Pagamento de boleto",
    currency: "BRL",
    status: "1",
    details: {
      stailments: "10",
      stailment_value: "11.50",
      first_stailment_date: "2022-09-01T00:00:00.000Z",
    },
  },
  {
    id: "1",
    user_id: "1",
    card_id: "1",
    type: "1",
    value: "100.50",
    date: "2022-09-01T00:00:00.000Z",
    description: "Pagamento de boleto",
    currency: "BRL",
    status: "1",
    details: {
      stailments: "10",
      stailment_value: "11.50",
      first_stailment_date: "2022-09-01T00:00:00.000Z",
    },
  },
];

export const CardDetails = () => {
  const { params } = useRoute();

  console.log(params);

  return (
    <View style={styles.container}>
      <Text>CardDetails</Text>
      <MainCard
        number={params.item.number.slice(-4)}
        color={params.item.color}
      />
      <TransactionsList data={transactions} />
    </View>
  );
};
