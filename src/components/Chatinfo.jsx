import "./Chatinfo.css";
import Telbackground from "../assest/Telbackground.jpg";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const Chatinfo = ({ chat, updateMessages }) => {
  const [chatModal, setChatModal] = useState(false);
  const [input, setInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChatModal = () => {
    setChatModal(!chatModal);
  };

  const handleEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    updateMessages(input); 
    setInput("");
    setShowPicker(false);
  };

  if (!chat) {
    return <p>Chat tanlanmadi</p>;
  }

  return (
    <div className="chat-info-container">
      <div className="chat-info-head" onClick={handleChatModal}>
        <img src={chat.rasmi} alt={chat.nomi} />
        <div>
          <h2>{chat.nomi}</h2>
        </div>
      </div>

      {chatModal && (
        <div className="chat-modal">
          <img src={chat.rasmi} alt={chat.nomi} />
          <h2>{chat.nomi}</h2>
          <p>{chat.mal}</p>

          <div className="switch-container">
            <div className="switch-wrapper">
              <i className="bx bxs-bell"></i>
              <span>Notifications</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Xabarlar */}
      <div className="message-list">
        {chat.messages?.length === 0 ? (
          <div className="empty-message">Hozircha xabarlar yo‘q</div>
        ) : (
          chat.messages.map((msg, index) => (
            <div className="message-ms" key={index}>
              {typeof msg === "string" || msg.type === "text" ? (
                <div className="message-item">{msg.content || msg}</div>
              ) : msg.type === "image" ? (
                <img
                  src={msg.content}
                  alt="Yuborilgan rasm"
                  className="sent-image"
                />
              ) : null}
              <i className="bx bx-check"></i>
            </div>
          ))
        )}
      </div>

      <div className="entermessage">
        <div className="input-section">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Message"
            className="emoji-input"
          />
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="fileInput"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  updateMessages({ type: "image", content: reader.result });
                };
                reader.readAsDataURL(file);
              }
            }}
          />

          <label htmlFor="fileInput" className="emoji-button">
            <i class='bx rotaded-icon bx-paperclip bx-rotate-180'  ></i>
          </label>

          <button
            onClick={() => setShowPicker(!showPicker)}
            className="emoji-button"
          >
            <i className="bx bx-smile"></i>
          </button>

          {showPicker && (
            <div className="emoji-picker-wrapper">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>

        <button className="send-button" onClick={handleSend}>
          <i className="bx bx-send"></i>
        </button>
      </div>
    </div>
  );
};

export default Chatinfo;
