import { Text, View } from "react-native";
import { Toast } from "toastify-react-native";

import { styles } from "./styles";

export const useToasts = ({ type, title, message }) => {
  Toast[type](
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};
