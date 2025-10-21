
import { useNavigate, useParams } from 'react-router-dom';

export default function OrderDetails() {
  const navigate = useNavigate();
  const { orderId } = useParams();

  // Mock order data - in real app, fetch based on orderId
  const orderData = {
    id: 'PH-12345',
    eventType: 'Birthday Party',
    date: '25 November 2024',
    time: '7:00 PM',
    status: 'Confirmed',
    guestCount: 40,
    venue: {
      name: 'Garden View Resort',
      address: 'Plot No. 123, Banjara Hills, Hyderabad, Telangana 500034'
    },
    services: {
      venue: {
        required: true,
        name: 'Garden View Resort',
        address: 'Plot No. 123, Banjara Hills, Hyderabad'
      },
      food: {
        required: true,
        package: 'North Indian Buffet (Veg)',
        details: 'Includes appetizers, main course, desserts'
      },
      decoration: {
        required: true,
        theme: 'Modern Floral Theme',
        details: 'Pink and white floral arrangements'
      },
      addons: {
        required: true,
        items: ['DJ with Sound System', 'Professional Photographer', 'Birthday Cake']
      }
    },
    payment: {
      subtotal: 32000,
      taxes: 2400,
      discount: 0,
      total: 35000,
      method: 'UPI'
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleGetHelp = () => {
    const message = `Hi, I need help with my order ${orderData.id}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBookAgain = () => {
    navigate('/plan-party');
  };

  const handleCancelOrder = () => {
    if (confirm('Are you sure you want to cancel this order?')) {
      // Handle cancellation logic
      alert('Order cancellation request submitted');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 pb-6">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-4 px-4 py-4">
          <button 
            onClick={() => navigate('/orders')}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-orange-600 transition-colors"
          >
            <i className="ri-arrow-left-line text-lg"></i>
          </button>
          <h1 className="text-xl font-bold text-gray-800">Order Details</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Order Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{orderData.id}</h2>
              <p className="text-gray-600 mt-1">{orderData.eventType}</p>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {orderData.status}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <i className="ri-calendar-line text-orange-500"></i>
            <span>{orderData.date} • {orderData.time}</span>
          </div>
        </div>

        {/* Guest & Location Details */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Event Details</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <i className="ri-group-line text-orange-500 text-lg"></i>
              <span className="text-gray-700">{orderData.guestCount} Guests</span>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-map-pin-line text-orange-500 text-lg mt-1"></i>
              <div>
                <p className="font-medium text-gray-800">{orderData.venue.name}</p>
                <p className="text-gray-600 text-sm">{orderData.venue.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Breakdown */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Services Booked</h3>
          <div className="space-y-4">
            {/* Venue */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-medium text-gray-800">Venue</h4>
              {orderData.services.venue.required ? (
                <div>
                  <p className="text-gray-700">{orderData.services.venue.name}</p>
                  <p className="text-gray-600 text-sm">{orderData.services.venue.address}</p>
                </div>
              ) : (
                <p className="text-gray-500">Not Required</p>
              )}
            </div>

            {/* Food */}
            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-medium text-gray-800">Food & Catering</h4>
              {orderData.services.food.required ? (
                <div>
                  <p className="text-gray-700">{orderData.services.food.package}</p>
                  <p className="text-gray-600 text-sm">{orderData.services.food.details}</p>
                </div>
              ) : (
                <p className="text-gray-500">Not Required</p>
              )}
            </div>

            {/* Decoration */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-medium text-gray-800">Decoration</h4>
              {orderData.services.decoration.required ? (
                <div>
                  <p className="text-gray-700">{orderData.services.decoration.theme}</p>
                  <p className="text-gray-600 text-sm">{orderData.services.decoration.details}</p>
                </div>
              ) : (
                <p className="text-gray-500">Not Required</p>
              )}
            </div>

            {/* Add-ons */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-gray-800">Add-ons</h4>
              {orderData.services.addons.required ? (
                <div className="space-y-1">
                  {orderData.services.addons.items.map((addon, index) => (
                    <p key={index} className="text-gray-700">• {addon}</p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Not Required</p>
              )}
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800">{formatPrice(orderData.payment.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Taxes & Fees</span>
              <span className="text-gray-800">{formatPrice(orderData.payment.taxes)}</span>
            </div>
            {orderData.payment.discount > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Discount</span>
                <span className="text-green-600">-{formatPrice(orderData.payment.discount)}</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-800">Total Amount Paid</span>
                <span className="font-bold text-xl text-gray-800">{formatPrice(orderData.payment.total)}</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">Paid via {orderData.payment.method}</p>
            </div>
          </div>
          
          <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all">
            <i className="ri-download-line mr-2"></i>
            Download Invoice
          </button>
        </div>

        {/* Support & Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Support & Actions</h3>
          <div className="space-y-3">
            <button 
              onClick={handleGetHelp}
              className="w-full bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-all flex items-center justify-center gap-2"
            >
              <i className="ri-customer-service-2-line"></i>
              Get Help
            </button>
            
            {orderData.status === 'Confirmed' && (
              <button 
                onClick={handleCancelOrder}
                className="w-full bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition-all flex items-center justify-center gap-2"
              >
                <i className="ri-close-circle-line"></i>
                Cancel Order
              </button>
            )}
            
            {orderData.status === 'Completed' && (
              <button 
                onClick={handleBookAgain}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
              >
                <i className="ri-repeat-line"></i>
                Book Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
