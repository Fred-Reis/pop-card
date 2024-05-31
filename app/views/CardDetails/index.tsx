import { View, Text, Button } from "react-native";

import { useRoute } from "@react-navigation/native";

import { styles } from "./styles";

export const CardDetails = () => {
  const { params } = useRoute();

  console.log(params);

  return (
    <View style={styles.container}>
      <Text>CardDetails</Text>
      <Button title="Click Me" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};
