
import { Venue } from '../../types';

interface VenueHeaderProps {
  venue: Venue;
}

export default function VenueHeader({ venue }: VenueHeaderProps) {
  const formatPrice = () => {
    if (venue.pricing?.perPlate) {
      return `₹${venue.pricing.perPlate.toLocaleString()} per plate`;
    }
    return `Starts at ₹${venue.pricing?.startingPrice?.toLocaleString() || '0'}`;
  };

  const handleViewMap = () => {
    const encodedAddress = encodeURIComponent(venue.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="pt-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{venue.name}</h1>
          <div className="flex items-center gap-2 mb-2">
            <i className="ri-map-pin-line text-gray-500"></i>
            <span className="text-sm text-gray-600">{venue.address}</span>
          </div>
          <button
            onClick={handleViewMap}
            className="text-sm text-orange-600 font-medium hover:text-orange-700 transition-colors"
          >
            View on Map →
          </button>
        </div>
        <div className="text-right ml-4">
          <p className="text-2xl font-bold text-orange-600">{formatPrice()}</p>
        </div>
      </div>

      <div className="flex items-center gap-6 py-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <i className="ri-star-fill text-yellow-400"></i>
          <span className="font-semibold text-gray-900">{venue.rating}</span>
          <span className="text-sm text-gray-600">({venue.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="ri-group-line text-gray-500"></i>
          <span className="text-sm text-gray-600">
            {venue.capacity?.min}-{venue.capacity?.max} guests
          </span>
        </div>
      </div>
    </div>
  );
}
