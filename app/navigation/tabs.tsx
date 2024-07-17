import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, AddFunds, History } from "@/views";
import { Header } from "./components/FullHeader";

import { CustomTabIcon } from "./components/CustomTabIcon";
import { CustomTabButtonIcon } from "./components/CustomTabButonIcon";

import { styles } from "./styles";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ route, navigation }) => (
          <Header title={route.name} navigation={navigation} />
        ),
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabBar,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              text="HOME"
              focused={focused}
              icon={require("../assets/icons/tab/home.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Adicionar Fundos"
        component={AddFunds}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/tab/$.png")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? "rgba(48,249,201,0.8)" : "#ddd",
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
