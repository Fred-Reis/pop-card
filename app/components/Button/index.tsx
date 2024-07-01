import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

interface ButtonProps {
  message: string;
  action: () => void;
  type?: "default" | "outline" | "noBorder";
  fontColor?: string;
  fontSize?: number;
}

export const CusttomButton = ({
  message,
  action,
  type = "default",
  fontColor,
  fontSize = 22,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={[styles.container, styles[type]]}>
        <Text
          style={[styles.message, { color: fontColor, fontSize: fontSize }]}
        >
          {message}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
