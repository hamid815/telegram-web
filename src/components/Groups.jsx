import './Groups.css';

const Groups = ({ activeFilter, setActiveFilter, chats }) => {
  const tabs = [
    { label: "All", value: "all" },
    { label: "Shaxsiy", value: "shaxsiy" },
    { label: "Guruhlar", value: "guruh" },
    { label: "Kanallar", value: "kanal" },
    { label: "Botlar", value: "bot" },
  ];

  // Filterlangan chatlar ro‘yxati
  const filteredChats =
    activeFilter === "all"
      ? chats
      : chats.filter((chat) => chat.type === activeFilter);

  return (
    <div>
      {/* Yuqoridagi filter tugmalari */}
      <div className="groups-wrapper">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`group-tab ${activeFilter === tab.value ? "active" : ""}`}
            onClick={() => setActiveFilter(tab.value)}
          >
            <h2>{tab.label}</h2>
          </div>
        ))}
      </div>

      {/* Filterlangan chatlar ro‘yxati */}
      {/* <div className="chat-list">
        {filteredChats.length === 0 ? (
          <p className="empty-text">Hech narsa topilmadi</p>
        ) : (
          filteredChats.map((chat, i) => (
            <div className="chat-item" key={i}>
              <img src={chat.rasmi} alt={chat.nomi} />
              <span>{chat.nomi}</span>
            </div>
          ))
        )}
      </div> */}
    </div>
  );
};

export default Groups;
