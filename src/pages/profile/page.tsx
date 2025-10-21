import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/feature/BottomNav';

export default function Profile() {
  const navigate = useNavigate();
  const [user] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+91 98765 43210',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20woman%20with%20a%20warm%20smile%2C%20business%20casual%20attire%2C%20clean%20studio%20lighting%2C%20modern%20portrait%20photography%20style%2C%20high%20quality%2C%20friendly%20expression&width=120&height=120&seq=profile-avatar&orientation=squarish',
    memberSince: 'March 2023',
    totalEvents: 12,
    favoriteVenues: 8
  });

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    {
      icon: 'ri-calendar-event-line',
      title: 'My Events',
      subtitle: 'View your planned events',
      action: () => navigate('/orders'),
      badge: user.totalEvents
    },
    {
      icon: 'ri-heart-line',
      title: 'Favorite Venues',
      subtitle: 'Your saved venues',
      action: () => navigate('/venues'),
      badge: user.favoriteVenues
    },
    {
      icon: 'ri-coupon-line',
      title: 'My Offers',
      subtitle: 'Available discounts',
      action: () => navigate('/offers'),
      badge: '3 Active'
    },
    {
      icon: 'ri-notification-line',
      title: 'Notifications',
      subtitle: 'Manage your alerts',
      action: () => {},
      toggle: true
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Help & Support',
      subtitle: 'Get assistance',
      action: () => {}
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Privacy Policy',
      subtitle: 'Your data protection',
      action: () => {}
    },
    {
      icon: 'ri-file-text-line',
      title: 'Terms of Service',
      subtitle: 'App usage terms',
      action: () => {}
    },
    {
      icon: 'ri-star-line',
      title: 'Rate Our App',
      subtitle: 'Share your feedback',
      action: () => {}
    }
  ];

  const handleLogout = () => {
    setShowLogoutModal(false);
    // Add logout logic here
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-base font-bold text-gray-900">Profile</h1>
          <button 
            onClick={() => setShowLogoutModal(true)}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95"
          >
            <i className="ri-logout-box-line text-xl text-gray-600"></i>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 px-4">
        {/* User Info Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                <i className="ri-camera-line text-white text-xs"></i>
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-900">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-xs text-gray-500">Member since {user.memberSince}</p>
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95">
              <i className="ri-edit-line text-gray-600"></i>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900">{user.totalEvents}</p>
              <p className="text-xs text-gray-600">Events Planned</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900">{user.favoriteVenues}</p>
              <p className="text-xs text-gray-600">Favorite Venues</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900">4.8</p>
              <p className="text-xs text-gray-600">Rating</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
          <h3 className="font-bold text-base text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => navigate('/plan-party')}
              className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-4 text-white hover:shadow-lg active:scale-95 transition-all"
            >
              <i className="ri-add-circle-line text-2xl mb-2"></i>
              <p className="text-sm font-semibold">Plan New Event</p>
            </button>
            <button 
              onClick={() => navigate('/venues')}
              className="bg-purple-100 rounded-xl p-4 text-purple-700 hover:bg-purple-200 active:scale-95 transition-all"
            >
              <i className="ri-building-line text-2xl mb-2"></i>
              <p className="text-sm font-semibold">Browse Venues</p>
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="w-full flex items-center gap-4 px-5 py-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                <i className={`${item.icon} text-gray-600 text-lg`}></i>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-600">{item.subtitle}</p>
              </div>
              {item.badge && (
                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                  {item.badge}
                </span>
              )}
              {item.toggle ? (
                <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                </div>
              ) : (
                <i className="ri-arrow-right-s-line text-gray-400 text-xl"></i>
              )}
            </button>
          ))}
        </div>

        {/* App Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 mb-2">PartyPlanner App</p>
          <p className="text-xs text-gray-400">Version 2.1.0</p>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <div className="text-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-red-100 rounded-full">
                <i className="ri-logout-box-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Logout</h3>
              <p className="text-sm text-gray-600">Are you sure you want to logout from your account?</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="py-3 rounded-xl font-semibold text-sm border-2 border-gray-200 text-gray-700 hover:bg-gray-50 active:scale-95 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="py-3 rounded-xl font-semibold text-sm bg-red-600 text-white hover:bg-red-700 active:scale-95 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}