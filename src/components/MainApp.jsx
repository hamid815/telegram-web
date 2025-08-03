import { useState, useRef } from "react";
import "../components/MainApp.css";
import Header from "./Header";
import Groups from "./Groups";
import Chat1 from "./Chat1";
import Chatinfo from "./Chatinfo";
import { chatMalumotlar } from "./Chat1";

function MainApp() {
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [tanlanganChat, setTanlanganChat] = useState(chatMalumotlar[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const [chats, setChats] = useState(chatMalumotlar); 
  const [tanlanganChatId, setTanlanganChatId] = useState(chats[0].id); 

  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newWidth = e.clientX;
    if (newWidth > 200 && newWidth < 600) {
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div className="allchats">
        <div className="chats" style={{ width: sidebarWidth }}>
          <Header setSearchTerm={setSearchTerm} />

          <Groups
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <Chat1
            chats={chats} 
            setTanlanganChatId={setTanlanganChatId} 
            activeFilter={activeFilter}
            searchTerm={searchTerm}
          />
        </div>

        <div className="resizer" onMouseDown={handleMouseDown} />

        <div className="chatinfo">
          <Chatinfo
            chat={chats.find((c) => c.id === tanlanganChatId)}
            updateMessages={(newMsg) => {
              const updatedChats = chats.map(chat =>
                chat.id === tanlanganChatId
                  ? { ...chat, messages: [...chat.messages, newMsg] }
                  : chat
              );
              setChats(updatedChats);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MainApp;
