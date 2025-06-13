import "../../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { FontAwesome5 } from "@expo/vector-icons";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import HistoryChatsDrawer from "@/components/HistoryChatsDrawer";

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white",
  },
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider value={myTheme}>
        <Drawer
          drawerContent={HistoryChatsDrawer}
          screenOptions={{
            headerTitle: "", // Set an empty header title
            // headerShown: false, // Hide the header
            drawerType: "slide",
            headerStyle: { backgroundColor: "#121212" },
            drawerInactiveTintColor: "#ccc",
            drawerStyle: {
              borderRightColor: "#ccc",
              borderWidth: 1,
            },
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "ChatGpt",
              drawerIcon: () => (
                <FontAwesome5 name="atom" size={18} color="darkgray" />
              ),
            }}
          />
          {/* Hide the chat screen from the drawer */}
          <Drawer.Screen
            name="chat/[id]"
            options={{ drawerItemStyle: { display: "none" } }}
          />
        </Drawer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
