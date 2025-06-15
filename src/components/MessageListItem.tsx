import { Text, View } from "react-native";
import Markdown from "react-native-markdown-display";

// Тип одного сообщения
export type MessageItemType = {
  id: string;
  role: string;
  message: string;
};

// Тип пропсов компонента
type MessageListItemProps = {
  messageItem: MessageItemType;
};

const markdownStyles = {
  body: {
    color: "white",
  },
  code_inline: {
    backgroundColor: "#1e1e1e",
    color: "white",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    lineHeight: 20,
  },
  code_block: {
    backgroundColor: "#1e1e1e",
    color: "white",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    lineHeight: 20,
  },
  fence: {
    backgroundColor: "#1e1e1e",
    color: "white",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    lineHeight: 20,
  },
  blockquote: {
    backgroundColor: "#2d2d2d",
    borderLeftColor: "#4d4d4d",
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 8,
    marginVertical: 8,
  },
  bullet_list: {
    marginVertical: 8,
  },
  ordered_list: {
    marginVertical: 8,
  },
  list_item: {
    marginVertical: 4,
  },
  hr: {
    backgroundColor: "#4d4d4d",
    marginVertical: 16,
  },
  heading1: {
    marginVertical: 10,
  },
  heading2: {
    marginVertical: 10,
  },
  heading3: {
    marginVertical: 10,
  },
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
