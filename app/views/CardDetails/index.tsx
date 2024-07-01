import { useState } from "react";
import { View, Text, Button } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { useUserStore } from "@/store";
import { CardProps } from "@/types/cardDTO";
import { useToasts } from "@/utils/services/toast";
import ConfirmModal from "./components/ConfirmModal";
import { useEditCards } from "@/server/queries/editCards";
import { TransactionsList } from "./components/TransactionsList";
import { CusttomButton, MainCard, ModalComponent as Modal } from "@/components";

import { styles } from "./styles";

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
  const [showModal, setShowModal] = useState(false);
  const { params }: { params: { item: CardProps } } = useRoute();

  const { navigate } = useNavigation();

  const { user } = useUserStore();

  const addCard = useEditCards();

  const handleRemoveCard = () => {
    try {
      addCard.mutate({
        id: user.id,
        cards: user.cards.filter((card) => card.id !== params.item.id),
      });

      useToasts({
        type: "success",
        title: "Cartão removido",
        message: "Cartão removido com sucesso",
      });

      setShowModal(false);
      setTimeout(() => navigate("Home" as never), 1000);
    } catch (err) {
      console.log(err);

      useToasts({
        type: "error",
        title: "Cartão não removido",
        message: "Cartão não removido, tente novamente",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.item.nick_name}</Text>
      <MainCard
        number={params.item.number.slice(-4)}
        color={params.item.color || "#3d3d3d"}
      />
      <CusttomButton
        type="noBorder"
        fontColor="#007AFF"
        fontSize={18}
        message="Remover Cartão"
        action={() => setShowModal(true)}
      />
      <TransactionsList data={transactions} />
      <Modal visible={showModal} closeModal={() => setShowModal(false)}>
        <ConfirmModal
          submitAction={handleRemoveCard}
          closeModal={() => setShowModal(false)}
        />
      </Modal>
    </View>
  );
};
