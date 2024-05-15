import { ReactNode } from "react";

import {
  GestureResponderEvent,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { styles } from "./styles";

interface Props {
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

export const CustomTabButtonIcon = ({ children, onPress }: Props) => (
  <TouchableWithoutFeedback onPress={onPress} style={styles.wrapper}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);
