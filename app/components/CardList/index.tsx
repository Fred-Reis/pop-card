import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { CardListItem } from "@/components";
import { CardProps } from "@/types/cardDTO";

import { styles } from "./styles";

import plus from "@/assets/plus_btn.png";

interface Props {
  data: CardProps[];
}

const AddCardButton = () => (
  <TouchableOpacity style={styles.addCardButton}>
    <Image source={plus} />
  </TouchableOpacity>
);

const EmptyCardList = () => (
  <View style={styles.empty}>
    <Text style={styles.emptyMessage}>Você não possui cartões cadastrados</Text>
    <Text style={styles.emptyMessage}>Clique abaixo e adicione um cartão</Text>
    <AddCardButton />
  </View>
);

export const CardList = ({ data }: Props) => {
  return (
    <>
      {data.length ? <Text style={styles.title}>Meus cartões</Text> : null}
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <CardListItem item={item} />}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={160}
        bounces={false}
        style={styles.list}
        contentContainerStyle={{
          paddingRight: 20,
        }}
        ListFooterComponent={() => <AddCardButton />}
        ListEmptyComponent={() => <EmptyCardList />}
      />
    </>
  );
};
