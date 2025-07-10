import ChatHeader from "../ChatHeader/ChatHeader";
import MessageList from "../MessageList/MessageList";
import ChatInput from "../ChatInput/ChatInput";
import "./ChatWindow.scss";

const ChatWindow = ({ messages, onSendMessage, onClose, isLoading }) => {
  return (
    <div className="chat-window">
      <ChatHeader onClose={onClose} />
      <MessageList messages={messages} isLoading={isLoading} />
      <ChatInput onSendMessage={onSendMessage} disabled={isLoading} />
    </div>
  );
};

export default ChatWindow;
