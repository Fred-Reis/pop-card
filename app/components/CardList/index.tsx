import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { ModalComponent as Modal } from "@/components";
import { AddCardModal } from "./components/AddCardModal";
import { CardItem } from "./components/CardItem";
import { CardProps } from "@/types/cardDTO";

import { styles } from "./styles";

import plus from "@/assets/plus_btn.png";

interface Props {
  data: CardProps[];
}

const AddCardButton = ({ onPress }) => (
  <TouchableOpacity style={styles.addCardButton} onPress={onPress}>
    <Image source={plus} />
  </TouchableOpacity>
);

const EmptyCardList = ({ onPress }) => (
  <View style={styles.empty}>
    <Text style={styles.emptyMessage}>Você não possui cartões cadastrados</Text>
    <Text style={styles.emptyMessage}>Clique abaixo e adicione um cartão</Text>
    <AddCardButton onPress={onPress} />
  </View>
);

export const CardList = ({ data, ...rest }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {data.length ? <Text style={styles.title}>Meus cartões</Text> : null}
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <CardItem item={item} />}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={160}
        bounces={false}
        style={styles.list}
        contentContainerStyle={{
          paddingRight: 20,
        }}
        ListFooterComponent={() => (
          <AddCardButton onPress={() => setShowModal(true)} />
        )}
        ListEmptyComponent={() => (
          <EmptyCardList onPress={() => setShowModal(true)} />
        )}
        {...rest}
      />
      <Modal visible={showModal} closeModal={() => setShowModal(false)}>
        <AddCardModal closeModal={() => setShowModal(false)} />
      </Modal>
    </>
  );
};
