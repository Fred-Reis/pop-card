import { Image, ImageSourcePropType, Platform, Text, View } from "react-native";

import { styles } from "./styles";

interface Props {
  focused: boolean;
  icon: ImageSourcePropType;
  text: string;
}

export const CustomTabIcon = ({ focused, icon, text }: Props) => (
  <View
    style={[
      styles.container,
      {
        top: Platform.OS === "ios" ? 15 : 0,
      },
    ]}
  >
    <Image
      source={icon}
      resizeMode="contain"
      style={[
        styles.image,
        {
          tintColor: focused ? "rgba(48,249,201,0.8)" : "#ddd",
        },
      ]}
    />
    <Text
      style={{
        color: focused ? "rgba(48,249,201,0.8)" : "#ddd",
        fontSize: 12,
      }}
    >
      {text}
    </Text>
  </View>
);
