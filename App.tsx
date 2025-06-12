import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-accent dark:bg-primary ">
      <Text className="text-4xl font-bold text-primary dark:text-accent">Odinokun's RN AI Chat!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
