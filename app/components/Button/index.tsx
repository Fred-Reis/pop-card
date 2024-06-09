import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

interface ButtonProps {
  message: string;
  action: () => void;
  type?: "default" | "outline";
}

export const CusttomButton = ({
  message,
  action,
  type = "default",
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={[styles.container, styles[type]]}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};
