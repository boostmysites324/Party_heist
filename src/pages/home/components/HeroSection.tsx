
interface HeroSectionProps {
  onPlanParty: () => void;
}

export default function HeroSection({ onPlanParty }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img 
          src="https://readdy.ai/api/search-image?query=Luxurious%20Indian%20wedding%20celebration%20with%20elegant%20mandap%20decoration%2C%20beautiful%20floral%20arrangements%2C%20golden%20lighting%2C%20traditional%20marigold%20flowers%2C%20sophisticated%20event%20setup%2C%20professional%20photography%2C%20warm%20ambient%20lighting%2C%20rich%20colors%20with%20gold%20accents%2C%20festive%20atmosphere%2C%20high-end%20venue%20decoration&width=375&height=400&seq=hero-luxury&orientation=portrait"
          alt="Luxury event celebration"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>
      </div>
      
      <div className="relative px-6 pt-12 pb-16 text-center text-white">
        <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: '"Pacifico", serif' }}>
          Party Heist
        </h1>
        <p className="text-base mb-2 font-medium">Your Perfect Event Partner</p>
        <p className="text-sm mb-8 opacity-90 px-4">End-to-end event planning services for unforgettable celebrations</p>
        
        <button 
          onClick={onPlanParty}
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-full font-semibold text-base shadow-lg hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 active:scale-95"
        >
          Plan a Party
        </button>
        
        <div className="mt-8 flex items-center justify-center gap-6 text-xs">
          <div className="flex items-center gap-1">
            <i className="ri-checkbox-circle-fill text-green-400"></i>
            <span>Verified Vendors</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="ri-shield-check-fill text-green-400"></i>
            <span>Secure Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
