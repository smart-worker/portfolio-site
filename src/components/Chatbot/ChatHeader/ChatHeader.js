import "./ChatHeader.scss";

const ChatHeader = ({ onClose }) => {
  return (
    <div className="chat-header">
      <div className="chat-header-info">
        <div className="chat-avatar">
          <span>👋</span>
        </div>
        <div className="chat-header-text">
          <h3>Portfolio Assistant</h3>
          <p>Ask me about projects, skills, or experience</p>
        </div>
      </div>
      <button className="chat-close-btn" onClick={onClose}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatHeader;
