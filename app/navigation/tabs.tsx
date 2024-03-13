import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../views/Home";
import { AddCard } from "../views/AddCard";
import { History } from "../views/History";
import { Header } from "../components/Header";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <Header />,
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
                tintColor: focused ? "#fff" : "#3e3e3e",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabButtonIcon {...props} />,
        }}
      />
      <Tab.Screen
        name="History"
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
      top: 10,
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
        tintColor: focused ? "#fff" : "#3e3e3e",
      }}
    />
    <Text
      style={{
        color: focused ? "#fff" : "#3e3e3e",
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
        backgroundColor: "#2e8dcf",
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
    backgroundColor: "#2e8dcf",
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
