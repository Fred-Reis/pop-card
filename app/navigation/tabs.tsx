import {
  Image,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@/views/Home";
import { AddCard } from "@/views/AddCard";
import { History } from "@/views/History";
import { Header } from "@/components/Header";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ route }) => <Header name={route.name} />,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabBar,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Orçamento"
        component={AddCard}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              text="ORÇAMENTO"
              focused={focused}
              icon={require("../assets/icons/tab/investment-w.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/tab/$.png")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? "rgba(48,249,201,0.8)" : "#fff",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabButtonIcon {...props} />,
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={History}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              text="HISTÓRICO"
              focused={focused}
              icon={require("../assets/icons/tab/graph-w.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const CustomTabIcon = ({ focused, icon, text }) => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "center",
      top: Platform.OS === "ios" ? 15 : 0,
      bottom: 10,
      gap: 4,
    }}
  >
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        width: 25,
        height: 25,
        tintColor: focused ? "rgba(48,249,201,0.8)" : "#FFF",
      }}
    />
    <Text
      style={{
        color: focused ? "rgba(48,249,201,0.8)" : "#FFF",
        fontSize: 12,
      }}
    >
      {text}
    </Text>
  </View>
);

const CustomTabButtonIcon = ({ children, onPress }: any) => (
  <TouchableWithoutFeedback
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        top: -45,
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "rgba(239,144,55, 1)",
        borderColor: "#F2F2F2",
        borderWidth: 5,
      }}
    >
      {children}
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    backgroundColor: "rgba(239,144,55, 1)",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    borderRadius: 15,
    height: 90,
  },

  shadow: {
    shadowColor: "#3e3e3e",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
