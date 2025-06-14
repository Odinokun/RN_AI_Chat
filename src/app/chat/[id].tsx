import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

import chatHistory from "@assets/data/chatHistory.json";
import ChatInput from "@/components/ChatInput";

export default function ChatScreen() {
  const { id } = useLocalSearchParams();

  const chat = chatHistory.find(chat => chat.id === id);

  const handleSend = (message: string) => console.log("Sending: ", message);

  if (!chat) {
    return (
      <View>
        <Text className="text-white">Chat {id} not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text className="text-white font-bold text-2xl flex-1">
        Chat Screen: {chat.title}
      </Text>

      <ChatInput onSend={handleSend} isLoading={false} />
    </View>
  );
}
