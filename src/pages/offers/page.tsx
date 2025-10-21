import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/feature/BottomNav';
import AssistanceBanner from '../../components/feature/AssistanceBanner';

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  code: string;
  validUntil: string;
  minAmount: number;
  category: string;
  image: string;
  isPopular?: boolean;
  isLimited?: boolean;
}

export default function Offers() {
  const navigate = useNavigate();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const offers: Offer[] = [
    {
      id: '1',
      title: 'Wedding Season Special',
      description: 'Perfect for grand wedding celebrations',
      discount: '25% OFF',
      code: 'WEDDING25',
      validUntil: '2024-03-31',
      minAmount: 50000,
      category: 'Wedding',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20wedding%20celebration%20with%20beautiful%20decorations%2C%20golden%20lighting%2C%20floral%20arrangements%2C%20luxury%20wedding%20setup%2C%20romantic%20atmosphere%2C%20high%20quality%20details%2C%20professional%20photography&width=400&height=200&seq=wedding-offer&orientation=landscape',
      isPopular: true
    },
    {
      id: '2',
      title: 'Birthday Bash Bonanza',
      description: 'Make birthdays extra special',
      discount: '20% OFF',
      code: 'BIRTHDAY20',
      validUntil: '2024-04-15',
      minAmount: 15000,
      category: 'Birthday',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20birthday%20party%20celebration%20with%20balloons%2C%20cake%2C%20decorations%2C%20festive%20atmosphere%2C%20party%20setup%2C%20vibrant%20colors%2C%20high%20quality%20details%2C%20professional%20photography&width=400&height=200&seq=birthday-offer&orientation=landscape'
    },
    {
      id: '3',
      title: 'Corporate Event Deal',
      description: 'Professional events made affordable',
      discount: '30% OFF',
      code: 'CORPORATE30',
      validUntil: '2024-03-25',
      minAmount: 75000,
      category: 'Corporate',
      image: 'https://readdy.ai/api/search-image?query=Professional%20corporate%20event%20setup%2C%20business%20conference%2C%20elegant%20venue%2C%20modern%20lighting%2C%20professional%20atmosphere%2C%20high%20quality%20details%2C%20business%20photography&width=400&height=200&seq=corporate-offer&orientation=landscape',
      isLimited: true
    },
    {
      id: '4',
      title: 'Anniversary Celebration',
      description: 'Celebrate love and togetherness',
      discount: '15% OFF',
      code: 'ANNIVERSARY15',
      validUntil: '2024-04-30',
      minAmount: 25000,
      category: 'Anniversary',
      image: 'https://readdy.ai/api/search-image?query=Romantic%20anniversary%20celebration%2C%20elegant%20dinner%20setup%2C%20candles%2C%20flowers%2C%20intimate%20atmosphere%2C%20luxury%20dining%2C%20high%20quality%20details%2C%20professional%20photography&width=400&height=200&seq=anniversary-offer&orientation=landscape'
    },
    {
      id: '5',
      title: 'Festival Fiesta',
      description: 'Traditional celebrations with modern touch',
      discount: '18% OFF',
      code: 'FESTIVAL18',
      validUntil: '2024-05-10',
      minAmount: 30000,
      category: 'Festival',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Indian%20festival%20celebration%2C%20colorful%20decorations%2C%20rangoli%2C%20diyas%2C%20festive%20atmosphere%2C%20cultural%20celebration%2C%20high%20quality%20details%2C%20professional%20photography&width=400&height=200&seq=festival-offer&orientation=landscape'
    },
    {
      id: '6',
      title: 'Graduation Party Special',
      description: 'Celebrate academic achievements',
      discount: '22% OFF',
      code: 'GRADUATION22',
      validUntil: '2024-06-15',
      minAmount: 20000,
      category: 'Graduation',
      image: 'https://readdy.ai/api/search-image?query=Graduation%20party%20celebration%2C%20academic%20achievement%2C%20caps%20and%20gowns%2C%20festive%20decorations%2C%20success%20celebration%2C%20high%20quality%20details%2C%20professional%20photography&width=400&height=200&seq=graduation-offer&orientation=landscape'
    }
  ];

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  const handleBookNow = (offer: Offer) => {
    // Navigate to planning flow with the offer code
    navigate('/plan-party', { 
      state: { 
        offerCode: offer.code,
        offerDiscount: offer.discount,
        occasion: offer.category 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="flex items-center justify-center px-4 py-4">
          <h1 className="text-lg font-bold text-gray-900">Special Offers</h1>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 px-4">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 mb-6 text-white">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">🎉 Limited Time Deals</h2>
            <p className="text-sm opacity-90">Save big on your next celebration</p>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="space-y-4">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Offer Image */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {offer.discount}
                  </span>
                </div>
                {offer.isPopular && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      POPULAR
                    </span>
                  </div>
                )}
                {offer.isLimited && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                      LIMITED
                    </span>
                  </div>
                )}
              </div>

              {/* Offer Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base mb-1">{offer.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{offer.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <i className="ri-calendar-line"></i>
                      <span>Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <i className="ri-money-rupee-circle-line"></i>
                      <span>Min. order ₹{offer.minAmount.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs font-semibold">
                      {offer.category}
                    </span>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="bg-gray-50 rounded-xl p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Coupon Code</p>
                      <p className="font-mono font-bold text-gray-900 text-sm">{offer.code}</p>
                    </div>
                    <button
                      onClick={() => copyCode(offer.code)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        copiedCode === offer.code
                          ? 'bg-green-500 text-white'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {copiedCode === offer.code ? (
                        <>
                          <i className="ri-check-line mr-1"></i>
                          Copied!
                        </>
                      ) : (
                        <>
                          <i className="ri-file-copy-line mr-1"></i>
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleBookNow(offer)}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg active:scale-95 transition-all"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-2xl p-4 mt-6">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <i className="ri-information-line mr-2 text-blue-500"></i>
            Terms & Conditions
          </h3>
          <ul className="space-y-2 text-xs text-gray-600">
            <li>• Offers cannot be combined with other promotions</li>
            <li>• Valid for new bookings only</li>
            <li>• Minimum order amount must be met before discount</li>
            <li>• Offers are subject to venue availability</li>
            <li>• Company reserves the right to modify or cancel offers</li>
          </ul>
        </div>

        {/* Assistance Banner */}
        <div className="mt-6">
          <AssistanceBanner />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}