import ChatInput from "@/components/ChatInput";
import { Text, View } from "react-native";
import { useChatStore } from "@/store/chatStore";
import { router } from "expo-router";

export default function HomeScreen() {
  // Отримуємо функцію для створення нового чату
  const createNewChat = useChatStore((state) => state.createNewChat);
  // Отримуємо функцію для додавання нового повідомлення
  const addNewMessage = useChatStore((state) => state.addNewMessage);

  // Функція для обробки відправки повідомлення
  const handleSend = async (message: string) => {
    // Створюємо новий чат з title з перших 50 символів повідомлення
    // та отримуємо його ID
    const newChatId = createNewChat(message.slice(0, 50));
    // Додаємо перше повідомлення до нового чату
    addNewMessage(newChatId, {
      id: Date.now().toString(),
      role: "user",
      message,
    });
    // Перенаправляємо на новий чат
    router.push(`/chat/${newChatId}`);
  };

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
