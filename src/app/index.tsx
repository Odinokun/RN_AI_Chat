import ChatInput from "@/components/ChatInput";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const handleSend = async (message: string) =>
    console.log("Sending: ", message);

  return (
    <View className="align-center flex-1 justify-center">
      <View className="flex-1">
        <Text className="text-center text-3xl font-bold text-accent">
          Odinokun's AIChat
        </Text>
      </View>

      <ChatInput onSend={handleSend} />
    </View>
  );
}
