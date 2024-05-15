import { View, Text, Button } from "react-native";

import { styles } from "./styles";

export const History = () => {
  return (
    <View style={styles.container}>
      <Text>History</Text>
      <Button title="Click Me" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};
