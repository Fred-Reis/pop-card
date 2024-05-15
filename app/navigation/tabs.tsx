import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@/views/Home";
import { AddCard } from "@/views/AddCard";
import { History } from "@/views/History";
import { Header } from "@/components/Header";

import { CustomTabIcon } from "./components/CustomTabIcon";
import { CustomTabButtonIcon } from "./components/CustomTabButonIcon";

import { styles } from "./styles";

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
