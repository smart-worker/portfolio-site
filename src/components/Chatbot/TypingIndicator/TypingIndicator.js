import "./TypingIndicator.scss";

const TypingIndicator = () => {
  return (
    <div className="message assistant">
      <div className="message-avatar">
        <span>🤖</span>
      </div>
      <div className="message-content">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
