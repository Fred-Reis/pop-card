import { memo, useState } from "react";
import { View, FlatList, Text, Image } from "react-native";

import { ModalComponent as Modal } from "@/components";
import { FundsListItem } from "../FundsCardItem";
import { CardProps } from "@/types/cardDTO";

import { styles } from "./styles";
import AddFundsModal from "../AddFundsModal";

interface Props {
  data: CardProps[];
}

export const FundsCardList = ({ data }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState<CardProps>();

  function handleToggleModal(item: CardProps) {
    setItem(item);
    setShowModal(!showModal);
  }

  return (
    <>
      <Text style={styles.title}>
        Escolha o cartão que deseja usar para adicionar saldo
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <FundsListItem item={item} callback={handleToggleModal} />
        )}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={125}
        bounces={false}
        style={styles.list}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />

      <Modal visible={showModal} closeModal={() => setShowModal(false)}>
        <AddFundsModal closeModal={() => setShowModal(false)} item={item} />
      </Modal>
    </>
  );
};
