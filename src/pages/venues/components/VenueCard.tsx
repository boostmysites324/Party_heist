
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Venue } from '../types';

interface VenueCardProps {
  venue: Venue;
}

export default function VenueCard({ venue }: VenueCardProps) {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(venue.isWishlisted || false);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleCardClick = () => {
    navigate(`/venues/${venue.id}`);
  };

  const formatPrice = () => {
    if (venue.pricing?.perPlate) {
      return `₹${venue.pricing.perPlate.toLocaleString()} per plate`;
    }
    return `Starts at ₹${venue.pricing?.startingPrice?.toLocaleString() || '0'}`;
  };

  return (
    <button
      onClick={handleCardClick}
      className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all text-left"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28venue.images%5B0%5D%29%7D&width=375&height=192&seq=${venue.id}-main&orientation=landscape`}
          alt={venue.name}
          className="w-full h-full object-cover object-top"
        />
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all"
        >
          <i className={`${isWishlisted ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'} text-lg`}></i>
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-bold text-base text-gray-900 mb-1">{venue.name}</h3>
            <p className="text-xs text-gray-600 flex items-center">
              <i className="ri-map-pin-line mr-1"></i>
              {venue.location}
            </p>
          </div>
          <div className="text-right ml-3">
            <p className="text-lg font-bold text-orange-600">{formatPrice()}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1">
            <i className="ri-star-fill text-yellow-400 text-sm"></i>
            <span className="text-sm font-medium text-gray-900">{venue.rating}</span>
            <span className="text-xs text-gray-500">({venue.reviewCount} reviews)</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="ri-group-line text-gray-600 text-sm"></i>
            <span className="text-xs text-gray-600">Up to {venue.maxCapacity} guests</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {venue.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-lg">
              {amenity}
            </span>
          ))}
          {venue.amenities.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
              +{venue.amenities.length - 3} more
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
