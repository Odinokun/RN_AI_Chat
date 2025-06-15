import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const insets = useSafeAreaInsets();

  const [message, setMessage] = useState("");

  const handleSend = async () => {
    setMessage("");

    try {
      onSend(message);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <View
        className="rounded-t-2xl bg-[#262626]"
        style={{ paddingBottom: insets.bottom }}
      >
        <TextInput
          placeholder="Ask me anything..."
          value={message}
          onChangeText={setMessage}
          placeholderTextColor="gray"
          multiline
          className="px-4 pb-2 pt-6 text-white"
        />

        <View className="flex-row items-center justify-between px-4">
          <MaterialCommunityIcons name="plus" size={24} color="white" />

          {!!message ? (
            <MaterialCommunityIcons
              name="arrow-up-circle"
              size={32}
              color="white"
              className="ml-auto"
              disabled={isLoading}
              onPress={handleSend}
            />
          ) : (
            <View className="flex-row gap-2 rounded-full bg-white p-2">
              <MaterialCommunityIcons
                name="account-voice"
                size={16}
                color="black"
              />
              <Text className="text-sm text-black">Voice</Text>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
