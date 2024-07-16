import { View, Text, Button } from "react-native";

import { styles } from "./styles";

export const Account = () => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
      <Button title="Click Me" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};
