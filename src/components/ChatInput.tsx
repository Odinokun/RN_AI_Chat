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

type PropsType = {
  onSend: (message: string) => void;
  isLoading: boolean;
};

export default function ChatInput({ onSend, isLoading }: PropsType) {
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
        className="bg-[#262626] rounded-t-2xl"
        style={{ paddingBottom: insets.bottom }}
      >
        <TextInput
          placeholder="Ask me anything..."
          value={message}
          onChangeText={setMessage}
          placeholderTextColor="gray"
          multiline
          className="text-white pt-6 pb-2 px-4"
        />

        <View className="justify-between items-center px-4  flex-row">
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
            <View className="bg-white p-2 rounded-full flex-row gap-2">
              <MaterialCommunityIcons
                name="account-voice"
                size={16}
                color="black"
              />
              <Text className="text-black text-sm">Voice</Text>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
