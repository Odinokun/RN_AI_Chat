import { Chat, Message } from "@/types/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ChatStore {
  chatHistory: Chat[];
  createNewChat: (title: string) => string;
  addNewMessage: (chatId: string, message: Message) => void;
}

export const useChatStore = create<ChatStore>()(
  // використовуємо Zustand для зберігання стану чатів
  persist(
    // створюємо Zustand store з початковим станом
    (set) => ({
      // початкова історія чатів
      chatHistory: [],

      // функція для створення та додавання нового чату
      createNewChat: (title: string) => {
        const newChat: Chat = {
          id: Date.now().toString(),
          title,
          messages: [],
        };

        // оновлюємо стан, додаючи новий чат до історії
        set((state) => ({
          chatHistory: [newChat, ...state.chatHistory],
        }));

        return newChat.id;
      },

      // функція для додавання нового повідомлення до чату
      addNewMessage: (chatId: string, message: Message) => {
        set((state) => ({
          chatHistory: state.chatHistory.map((chat) =>
            chat.id === chatId
              ? { ...chat, messages: [...chat.messages, message] }
              : chat,
          ),
        }));
      },
    }),
    // зберігаємо стан у AsyncStorage для збереження між запусками додатку
    // використовуємо JSONStorage для зберігання даних у форматі JSON
    // назва сховища - chat-storage
    // це дозволяє зберігати історію чатів між запусками додатку
    {
      name: "chat-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
