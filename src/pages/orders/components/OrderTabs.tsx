
interface OrderTabsProps {
  activeTab: 'upcoming' | 'past' | 'corporate';
  onTabChange: (tab: 'upcoming' | 'past' | 'corporate') => void;
}

export default function OrderTabs({ activeTab, onTabChange }: OrderTabsProps) {
  const tabs = [
    { 
      id: 'upcoming', 
      label: 'Upcoming', 
      icon: 'ri-calendar-line',
      count: 2
    },
    { 
      id: 'past', 
      label: 'Past', 
      icon: 'ri-history-line',
      count: 1
    },
    { 
      id: 'corporate', 
      label: 'Corporate', 
      icon: 'ri-building-line',
      count: 2
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-sm border border-gray-100">
      <div className="grid grid-cols-3 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id as any)}
            className={`relative flex flex-col items-center justify-center py-4 px-3 rounded-xl font-medium text-sm transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <i className={`${tab.icon} text-lg mb-1`}></i>
            <span className="text-xs font-semibold">{tab.label}</span>
            {tab.count > 0 && (
              <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                activeTab === tab.id 
                  ? 'bg-white text-orange-500' 
                  : 'bg-orange-500 text-white'
              }`}>
                {tab.count}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
