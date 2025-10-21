
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import TrustIndicators from './components/TrustIndicators';
import ServiceCategories from './components/ServiceCategories';
import FeaturedEvents from './components/FeaturedEvents';
import AssistanceBanner from '../../components/feature/AssistanceBanner';
import BottomNav from '../../components/feature/BottomNav';

export default function Home() {
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState('Detecting...');
  const [isLocationLoading, setIsLocationLoading] = useState(true);

  useEffect(() => {
    // Simulate location detection
    const detectLocation = () => {
      setTimeout(() => {
        setCurrentLocation('Hyderabad');
        setIsLocationLoading(false);
      }, 1500);
    };

    detectLocation();
  }, []);

  const handlePlanParty = () => {
    navigate('/plan-party');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Top Bar with Auto-detected Location */}
      <div className="fixed top-0 left-0 right-0 bg-white text-gray-800 z-50 shadow-sm border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <i className={`${isLocationLoading ? 'ri-loader-4-line animate-spin' : 'ri-map-pin-fill'} text-red-600 text-lg`}></i>
            <span className="text-gray-800 font-medium text-sm">
              {currentLocation}
            </span>
            {!isLocationLoading && (
              <button className="ml-1 text-gray-400 hover:text-red-600 transition-colors">
                <i className="ri-refresh-line text-sm"></i>
              </button>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors">
              <i className="ri-search-line text-lg"></i>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors">
              <i className="ri-notification-3-line text-lg"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-14">
        <HeroSection onPlanParty={handlePlanParty} />
        <TrustIndicators />
        <ServiceCategories />
        <FeaturedEvents />
        <AssistanceBanner />
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
