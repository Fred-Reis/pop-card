import { useCallback, useState } from "react";
import { View, Text } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { useUserStore } from "@/store";
import { CardProps } from "@/types/cardDTO";
import { useEditCards } from "@/server/queries";
import { useToasts } from "@/utils/services/toast";
import ConfirmModal from "./components/ConfirmModal";
import { TransactionProps } from "@/types/transactionDTO";
import { TransactionsList } from "./components/TransactionsList";
import { CusttomButton, MainCard, ModalComponent as Modal } from "@/components";

import { styles } from "./styles";

export const CardDetails = () => {
  const [showModal, setShowModal] = useState(false);
  // !TODO FIX TS ERROR
  // @ts-ignore
  const {
    params,
  }: {
    params: { item: CardProps; transactions: TransactionProps[] };
  } = useRoute();

  const { navigate } = useNavigation();

  const { user } = useUserStore();

  const addCard = useEditCards();

  const handleRemoveCard = useCallback(() => {
    try {
      addCard.mutate({
        id: user.id,
        cards: user.cards.filter((card) => card.id !== params.item.id),
      });

      useToasts({
        type: "success",
        title: "Cartão removido",
        message: `O cartão ${params.item.nick_name} foi removido com sucesso`,
      });

      setShowModal(false);
      setTimeout(() => navigate("Home" as never), 1000);
    } catch (err) {
      console.log(err);

      useToasts({
        type: "error",
        title: "Cartão não removido",
        message: `O cartão ${params.item.nick_name} não foi removido, tente novamente`,
      });
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

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
      <TransactionsList data={params.transactions} />
      <Modal visible={showModal} closeModal={handleCloseModal}>
        <ConfirmModal
          card={params.item}
          submitAction={handleRemoveCard}
          closeModal={handleCloseModal}
        />
      </Modal>
    </View>
  );
};
