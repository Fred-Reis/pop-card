import { FlatList, ImageSourcePropType, Text } from "react-native";

import { ServiceItem } from "./ServiceItem";

import { styles } from "./styles";

export interface ServiceProps {
  icon: ImageSourcePropType;
  link: string;
}

interface ListProps {
  data: ServiceProps[];
}

export const ServiceList = ({ data }: ListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ServiceItem item={item} />}
      showsHorizontalScrollIndicator={false}
      horizontal
      snapToAlignment="start"
      decelerationRate={"fast"}
      snapToInterval={100}
      bounces={false}
      style={styles.list}
      contentContainerStyle={{
        paddingBottom: 20,
        paddingEnd: 20,
      }}
    />
  );
};
