import { Button, Text, View } from "react-native";

import { styles } from "./styles";

export const AddCard = () => {
  return (
    <View style={styles.container}>
      <Text>AddCard</Text>
      <Button title="Click Me" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};
