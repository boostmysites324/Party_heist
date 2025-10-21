
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderTabs from './components/OrderTabs';
import OrderCard from './components/OrderCard';
import OrderDetails from './components/OrderDetails';
import InquiryDetails from './components/InquiryDetails';
import BottomNav from '../../components/feature/BottomNav';

// Mock data for demonstration
const mockUpcomingOrders = [
  {
    id: 'PH-12345',
    type: 'Birthday Party',
    date: '25 November 2024',
    time: '7:00 PM',
    guestCount: 40,
    venue: 'Sunset Garden Resort',
    totalPrice: 35000,
    status: 'Confirmed',
    services: {
      venue: { name: 'Sunset Garden Resort', address: '123 Garden Street, Mumbai' },
      food: { name: 'North Indian Buffet (Veg)', price: 15000 },
      decoration: { name: 'Modern Floral Theme', price: 8000 },
      addons: ['DJ with Sound System', 'Photographer']
    },
    payment: {
      subtotal: 32000,
      taxes: 2880,
      discount: 0,
      total: 35000,
      method: 'UPI'
    }
  },
  {
    id: 'PH-12346',
    type: 'Anniversary',
    date: '30 November 2024',
    time: '6:30 PM',
    guestCount: 25,
    venue: 'Royal Banquet Hall',
    totalPrice: 28000,
    status: 'Confirmed',
    services: {
      venue: { name: 'Royal Banquet Hall', address: '456 Royal Street, Delhi' },
      food: { name: 'Continental Buffet', price: 12000 },
      decoration: { name: 'Romantic Rose Theme', price: 6000 },
      addons: ['Live Music Band']
    },
    payment: {
      subtotal: 25000,
      taxes: 2250,
      discount: 500,
      total: 28000,
      method: 'Credit Card'
    }
  }
];

const mockPastOrders = [
  {
    id: 'PH-12340',
    type: 'Wedding',
    date: '15 October 2024',
    time: '5:00 PM',
    guestCount: 150,
    venue: 'Grand Palace Hotel',
    totalPrice: 125000,
    status: 'Completed',
    services: {
      venue: { name: 'Grand Palace Hotel', address: '789 Palace Road, Jaipur' },
      food: { name: 'Traditional Rajasthani Thali', price: 75000 },
      decoration: { name: 'Royal Rajasthani Theme', price: 25000 },
      addons: ['Professional Photography', 'Videography', 'Mehendi Artist']
    },
    payment: {
      subtotal: 115000,
      taxes: 10350,
      discount: 2000,
      total: 125000,
      method: 'Bank Transfer'
    }
  }
];

const mockCorporateInquiries = [
  {
    id: 'PH-B2B-101',
    type: 'Corporate Annual Meet',
    guestCount: 750,
    submissionDate: '20 November 2024',
    status: 'Supervisor Assigned',
    supervisor: {
      name: 'Rajesh Kumar',
      photo: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20business%20manager%20in%20formal%20suit%2C%20corporate%20headshot%2C%20confident%20smile%2C%20office%20background%2C%20high%20quality%20portrait%20photography&width=80&height=80&seq=supervisor1&orientation=squarish',
      phone: '+919876543210'
    },
    companyName: 'Tech Solutions Pvt Ltd',
    requirements: ['Venue', 'Catering', 'AV Support', 'Branding']
  },
  {
    id: 'PH-B2B-102',
    type: 'Product Launch Event',
    guestCount: 500,
    submissionDate: '18 November 2024',
    status: 'In Review',
    supervisor: null,
    companyName: 'Innovation Corp',
    requirements: ['Venue', 'Catering', 'Decoration']
  }
];

export default function Orders() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'corporate'>('upcoming');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);

  const handleOrderClick = (order: any) => {
    setSelectedOrder(order);
    setSelectedInquiry(null);
  };

  const handleInquiryClick = (inquiry: any) => {
    setSelectedInquiry(inquiry);
    setSelectedOrder(null);
  };

  const handleBackToList = () => {
    setSelectedOrder(null);
    setSelectedInquiry(null);
  };

  const handleBack = () => {
    navigate('/');
  };

  const getOrdersForTab = () => {
    switch (activeTab) {
      case 'upcoming':
        return mockUpcomingOrders;
      case 'past':
        return mockPastOrders;
      case 'corporate':
        return mockCorporateInquiries;
      default:
        return [];
    }
  };

  const renderEmptyState = () => {
    const emptyMessages = {
      upcoming: {
        icon: 'ri-calendar-line',
        title: 'No Upcoming Events',
        message: 'You don\'t have any upcoming events. Start planning your next celebration!',
        buttonText: 'Plan New Event'
      },
      past: {
        icon: 'ri-history-line',
        title: 'No Past Events',
        message: 'Your completed events will appear here once you\'ve hosted them.',
        buttonText: 'Plan Your First Event'
      },
      corporate: {
        icon: 'ri-building-line',
        title: 'No Corporate Inquiries',
        message: 'Your B2B event inquiries will be displayed here.',
        buttonText: null
      }
    };

    const empty = emptyMessages[activeTab];

    return (
      <div className="flex flex-col items-center justify-center py-20 px-6">
        <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl mb-6 shadow-sm">
          <i className={`${empty.icon} text-4xl text-orange-500`}></i>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{empty.title}</h3>
        <p className="text-sm text-gray-600 text-center mb-8 max-w-xs leading-relaxed">{empty.message}</p>
        {empty.buttonText && (
          <button
            onClick={() => navigate('/plan-party')}
            className="py-4 px-8 rounded-2xl font-semibold text-sm bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:shadow-xl active:scale-95 transition-all"
          >
            {empty.buttonText}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="flex items-center justify-between px-4 py-4">
          <button 
            onClick={() => navigate('/')}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-orange-600 transition-colors"
          >
            <i className="ri-arrow-left-line text-lg"></i>
          </button>
          <h1 className="text-base font-bold text-gray-900">My Orders</h1>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-orange-600 transition-colors">
            <i className="ri-search-line text-lg"></i>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16">
        <OrderTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="px-4 py-4 space-y-3">
          {getOrdersForTab().length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
                <i className="ri-file-list-3-line text-gray-400 text-3xl"></i>
              </div>
              <p className="text-sm text-gray-500">No {activeTab} found</p>
            </div>
          ) : (
            getOrdersForTab().map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onClick={() => handleOrderClick(order)}
              />
            ))
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Order Details Modal */}
      {selectedOrder && (
        selectedOrder.type === 'inquiry' ? (
          <InquiryDetails
            inquiry={selectedOrder}
            onClose={() => setSelectedOrder(null)}
          />
        ) : (
          <OrderDetails
            order={selectedOrder}
            onClose={() => setSelectedOrder(null)}
          />
        )
      )}
    </div>
  );
}
