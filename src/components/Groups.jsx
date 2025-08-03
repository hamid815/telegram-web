import '../components/Groups.css';

const Groups = ({ activeFilter, setActiveFilter }) => {
    const tabs = [
    { label: "All", value: "all" },
    { label: "Shaxsiy", value: "shaxsiy" },
    { label: "Guruhlar", value: "guruh" },
    { label: "Kanallar", value: "kanal" },
    { label: "Botlar", value: "bot" },
];

    return (
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
    );
};

export default Groups;
