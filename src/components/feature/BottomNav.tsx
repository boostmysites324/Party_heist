
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'orders', label: 'Orders', icon: 'ri-file-list-3-line', route: '/orders' },
    { id: 'venues', label: 'Venues', icon: 'ri-building-line', route: '/venues' },
    { id: 'plan', label: 'Plan', icon: 'ri-add-line', route: '/plan-party', isCenter: true },
    { id: 'offers', label: 'Offers', icon: 'ri-percent-line', route: '/offers' },
    { id: 'profile', label: 'Profile', icon: 'ri-user-line', route: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.route;
          
          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.route)}
                className="flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full mx-2 my-1 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
              >
                <i className={`${item.icon} text-xl`}></i>
                <span className="text-xs font-medium mt-0.5">{item.label}</span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.route)}
              className={`flex flex-col items-center justify-center transition-colors ${
                isActive 
                  ? 'text-orange-600' 
                  : 'text-gray-500 hover:text-orange-500'
              }`}
            >
              <i className={`${item.icon} text-xl`}></i>
              <span className="text-xs font-medium mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
