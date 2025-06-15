import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";

import ChatInput from "@/components/ChatInput";
import MessageListItem from "@/components/MessageListItem";

import { useChatStore } from "@/store/chatStore";

export default function ChatScreen() {
  // отримуємо параметри з URL (наприклад, id чату)
  const { id } = useLocalSearchParams();

  // отримуємо історію чатів з Zustand store
  const chat = useChatStore((state) =>
    state.chatHistory.find((chat) => chat.id === id),
  );

  // Отримуємо функцію для додавання нового повідомлення
  const addNewMessage = useChatStore((state) => state.addNewMessage);

  // функція для обробки відправки повідомлення
  const handleSend = async (message: string) => {
    if (!chat) return;

    // Додаємо нове повідомлення до чату
    addNewMessage(chat.id, {
      id: Date.now().toString(),
      role: "user",
      message,
    });
  };

  if (!chat) {
    return (
      <View>
        <Text className="text-white">Chat {id} not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <FlatList
        data={chat.messages}
        renderItem={({ item }) => <MessageListItem messageItem={item} />}
      />

      <ChatInput onSend={handleSend} isLoading={false} />
    </View>
  );
}
