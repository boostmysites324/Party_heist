
import { Venue } from '../../types';

interface VenueDetailsProps {
  venue: Venue;
}

export default function VenueDetails({ venue }: VenueDetailsProps) {
  const getFoodPolicyText = () => {
    switch (venue.foodPolicy) {
      case 'in_house_only':
        return 'In-house Catering Only';
      case 'outside_allowed':
        return 'Outside Catering Allowed';
      case 'both':
        return 'Both In-house & Outside Catering';
      default:
        return 'Contact for Details';
    }
  };

  const getFoodPolicyColor = () => {
    switch (venue.foodPolicy) {
      case 'in_house_only':
        return 'text-blue-700 bg-blue-50';
      case 'outside_allowed':
        return 'text-green-700 bg-green-50';
      case 'both':
        return 'text-purple-700 bg-purple-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Details */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Key Details</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-full">
                <i className="ri-group-line text-orange-600"></i>
              </div>
              <div>
                <p className="font-medium text-gray-900">Capacity</p>
                <p className="text-sm text-gray-600">Guest accommodation</p>
              </div>
            </div>
            <span className="font-semibold text-gray-900">
              {venue.minCapacity} - {venue.maxCapacity} guests
            </span>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-full">
                <i className="ri-restaurant-line text-orange-600"></i>
              </div>
              <div>
                <p className="font-medium text-gray-900">Food Policy</p>
                <p className="text-sm text-gray-600">Catering options</p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getFoodPolicyColor()}`}>
              {getFoodPolicyText()}
            </span>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-full">
                <i className="ri-money-rupee-circle-line text-orange-600"></i>
              </div>
              <div>
                <p className="font-medium text-gray-900">Pricing</p>
                <p className="text-sm text-gray-600">
                  {venue.priceType === 'per_plate' ? 'Per plate pricing' : 'Venue rental'}
                </p>
              </div>
            </div>
            <span className="font-semibold text-gray-900">
              ₹{venue.pricing.startingPrice.toLocaleString()}
              {venue.priceType === 'per_plate' ? '/plate' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">About</h3>
        <p className="text-gray-700 leading-relaxed">{venue.description}</p>
      </div>
    </div>
  );
}
