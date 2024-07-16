import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppStack } from "./appNavigator";
import { Image } from "react-native";
import { CustomDrawerContent } from "./components/CustomDrawerContent";
import { Home, Account } from "@/views";
import { MyTabs } from "./tabs";
import { Header } from "./components/Header";
import { useUserStore } from "@/store";

const Drawer = createDrawerNavigator();

export function DrawerStack() {
  const { user } = useUserStore();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "rgba(239,144,55, 0.1)",
        drawerActiveTintColor: "rgba(239,144,55, 1)",
        // drawerActiveTintColor: "rgba(48,249,201,1)",
        drawerStyle: {
          backgroundColor: "##ddd",
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {user ? (
        <Drawer.Group>
          <Drawer.Screen
            name="TabsHome"
            component={MyTabs}
            options={{ headerShown: false, drawerLabel: "Home" }}
          />
          <Drawer.Screen
            name="Tab"
            component={AppStack}
            options={{
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="Account"
            component={Account}
            options={{
              title: "Minha Conta",
              drawerLabel: "Minha Conta",
              header: ({ route }) => (
                <Header title="Minha Conta" color={route.params?.item?.color} />
              ),
            }}
          />
        </Drawer.Group>
      ) : (
        <Drawer.Screen
          name="Tab"
          component={AppStack}
          options={{
            headerShown: false,
            drawerItemStyle: { display: "none" },
          }}
        />
      )}
    </Drawer.Navigator>
  );
}
