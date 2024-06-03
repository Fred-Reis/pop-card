import { FlatList, Text } from "react-native";

import { CardListItem } from "@/components";
import { CardProps } from "@/types/cardDTO";

import { styles } from "./styles";

interface Props {
  data: CardProps[];
}

export const CardList = ({ data }: Props) => {
  return (
    <>
      <Text style={styles.title}>Meus cartões</Text>
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
      />
    </>
  );
};
