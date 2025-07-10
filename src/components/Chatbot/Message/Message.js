import "./Message.scss";

const Message = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`message ${isUser ? "user" : "assistant"}`}>
      {!isUser && (
        <div className="message-avatar">
          <span>🤖</span>
        </div>
      )}
      <div className="message-content">
        <div className="message-bubble">{message.content}</div>
        <div className="message-time">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};

export default Message;
