import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../views/Home";
import { AddCard } from "../views/AddCard";
import { History } from "../views/History";
import { Header } from "../components/Header";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <Header />,
      }}
    >
      <Tab.Screen name="Add" component={AddCard} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};
