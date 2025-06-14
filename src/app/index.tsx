import ChatInput from "@/components/ChatInput";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const handleSend = (message: string) => console.log("Sending: ", message);

  return (
    <View className="justify-center align-center flex-1">
      <View className="flex-1">
        <Text className="text-3xl text-center font-bold text-accent">
          Odinokun's AIChat
        </Text>
      </View>

      <ChatInput onSend={handleSend} isLoading={false} />
    </View>
  );
}
