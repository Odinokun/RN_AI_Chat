import { View } from "react-native";
import Markdown from "react-native-markdown-display";
import { Message } from "@/types/types";
import { markdownStyles } from "@/utils/markdown";

type MessageListItemProps = {
  messageItem: Message;
};

export default function MessageListItem({ messageItem }: MessageListItemProps) {
  const { id, role, message } = messageItem;
  const isUser = role === "user";

  return (
    <View
      className={`mb-3 flex-row px-2 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <View
        className={`rounded-2xl px-4 py-1 ${isUser && "max-w-[70%] bg-[#262626]"}`}
      >
        <Markdown style={markdownStyles}>{message}</Markdown>
      </View>
    </View>
  );
}
