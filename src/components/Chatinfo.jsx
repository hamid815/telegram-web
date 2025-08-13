import "./Chatinfo.css";
import Telbackground from "../assest/Telbackground.jpg";
import { useState } from "react";
import { useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";

const Chatinfo = ({ chat, updateMessages, onBack }) => {
  const [input, setInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [chatModal, setChatModal] = useState(false);
 const messageEndRef = useRef(null);
  const handleEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
  };

  const handleChatModal = () => {
    setChatModal(!chatModal);
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    updateMessages(input);
    setInput("");
    setShowPicker(false);
  };

  const handleImageSend = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateMessages({ type: "image", content: imageUrl });
    }
  };
   useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat?.messages]);

  return (
    <div className="chat-info-container">
      {chat ? (
        <>
          <div className="chat-info-head" >
            {window.innerWidth <= 768 && (
              <button className="back-btn" onClick={onBack}>
                <i class='bx bx-chevron-left' ></i>
              </button>
            )}
            <img src={chat.rasmi} alt={chat.nomi} onClick={handleChatModal}/>
            <div>
              <h2 onClick={handleChatModal}>{chat.nomi}</h2>
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
            {chat.messages.length === 0 ? (
              <div className="empty-message">Hozircha xabarlar yo‘q</div>
            ) : (
              chat.messages.map((msg, index) => (
                <div className="message-ms" key={index}>
                  {typeof msg === "string" || msg.type === "text" ? (
                    <div className="message-item">{msg.content || msg}</div>
                  ) : msg.type === "image" ? (
                    <img src={msg.content} alt="Rasm" className="sent-image" />
                  ) : null}
                  <i className="bx bx-check"></i>
                </div>
              ))
            )}
          </div>
          

          {/* Xabar yuborish */}
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

              {/* Emoji tugmasi */}
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

              {/* Rasm yuklash */}
              <label className="emoji-button">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageSend}
                />
                <i className="bx bx-image"></i>
              </label>
            </div>

            <button className="send-button" onClick={handleSend}>
              <i className="bx bx-send"></i>
            </button>
          </div>
        </>
      ) : (
        <div className="empty-message" style={{ marginTop: "100px" }}>
          Chat tanlanmadi
        </div>
      )}
    </div>
  );
};

export default Chatinfo;
