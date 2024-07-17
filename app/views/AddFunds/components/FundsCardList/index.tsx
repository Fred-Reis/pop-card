import { useCallback, useState } from "react";
import { FlatList, Text } from "react-native";

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

  const handleToggleModal = useCallback((item: CardProps) => {
    setItem(item);
    setShowModal(!showModal);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

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

      <Modal visible={showModal} closeModal={handleCloseModal}>
        <AddFundsModal closeModal={handleCloseModal} item={item} />
      </Modal>
    </>
  );
};
