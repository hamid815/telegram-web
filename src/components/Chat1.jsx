import React from 'react';
import Telegramimg from "../assest/telegramrasm.webp";
import Savmess from '../assest/savmesstel.png';
import Izlaydib from '../assest/izlaydibot.jpg';
import Frontend from '../assest/Frontend.jpg';
import Futboltv from '../assest/Futboltv.jpg';
import Foundation from '../assest/Foundation.jpg';
import Samsungsam from '../assest/Samsungsam.jpg';
import Temkhat from '../assest/Temkhat.jpg';
import Mrfayoz from '../assest/Mrfayoz.jpg';
import Uquvbulim from '../assest/Uzuvbulim.jpg';
import Botfather from '../assest/Botfather.jpg';
import Vkmusic from '../assest/Vkmusicbot.jpg';
import '../components/Chatinfo.css';

export const chatMalumotlar = [
  { id: 1, nomi: "Telegram", rasmi: Telegramimg, mal: "Photo", type: "kanal",messages:[] },
  { id: 2, nomi: "Saved Messages", rasmi: Savmess, mal: "Xabarlar", type: "shaxsiy", messages:[] },
  { id: 3, nomi: "Izlaydi Bot", rasmi: Izlaydib, mal: "Bot", type: "bot", messages:[] },
  { id: 4, nomi: "Frontend", rasmi: Frontend, mal: "Dasturlash", type: "guruh", messages:[] },
  { id: 5, nomi: "Futbol TV | Rasmiy", rasmi: Futboltv, mal: "Futbol", type: "kanal", messages:[] },
  { id: 6, nomi: "Foundation - 4", rasmi: Foundation, mal: "kurs", type: "guruh", messages:[] },
  { id: 7, nomi: "Texnika va Telefon", rasmi: Samsungsam, mal: "Texnologiya", type: "guruh", messages:[] },
  { id: 8, nomi: "Temur Khatamov new", rasmi: Temkhat, mal: "Samsung Galaxy", type: "kanal", messages:[] },
  { id: 9, nomi: "Mirfayoz Blog | Texnobloger", rasmi: Mrfayoz, mal: "Xiomi Hyper OS 2.2", type: "kanal", messages:[] },
  { id: 10, nomi: "Uquv Bulim", rasmi: Uquvbulim, mal: "Stiker👍", type: "guruh", messages:[] },
  { id: 11, nomi: "Botlar", rasmi: Botfather, mal: "Your Bot", type: "bot", messages:[] },
  { id: 12, nomi: "VK Music Bot", rasmi: Vkmusic, mal: "Music Bot", type: "bot", messages:[] },
];

const Chat1 = ({ chats, setTanlanganChatId, activeFilter, searchTerm }) => {
  let filteredChats = activeFilter === "all"
    ? chats
    : chats.filter(item => item.type === activeFilter);

  filteredChats = filteredChats.filter(item =>
    item.nomi?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  return (
    <div className="chatlar-container">
      {filteredChats.map((item) => (
        <div
          key={item.id}
          className="chatlar"
          onClick={() => setTanlanganChatId(item.id)} 
        >
          <img src={item.rasmi} alt={item.nomi} />
          <div>
            <h3>{item.nomi}</h3>
            <p className='chatlar-mal'>{item.mal}</p>
          </div>
        </div>
      ))}

      {filteredChats.length === 0 && (
        <div className="no-chats">Hech qanday chat topilmadi.</div>
      )}
    </div>
  );
};

export default Chat1;
