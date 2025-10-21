
import { useState } from 'react';
import { FilterOptions } from '../types';
import { locations, eventTypes, amenitiesList } from '../../../mocks/venues';

interface FilterModalProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onClose: () => void;
}

export default function FilterModal({ filters, onFiltersChange, onClose }: FilterModalProps) {
  const [localFilters, setLocalFilters] = useState<FilterOptions>(filters);

  const capacityOptions = [
    { label: '0-50 guests', value: '0-50' },
    { label: '51-100 guests', value: '51-100' },
    { label: '101-200 guests', value: '101-200' },
    { label: '201-500 guests', value: '201-500' },
    { label: '500+ guests', value: '500+' }
  ];

  const ratingOptions = [
    { label: '4★ and above', value: 4 },
    { label: '3★ and above', value: 3 },
    { label: '2★ and above', value: 2 },
    { label: 'All ratings', value: 0 }
  ];

  const handlePriceChange = (index: number, value: number) => {
    const newRange: [number, number] = [...localFilters.priceRange];
    newRange[index] = value;
    setLocalFilters({ ...localFilters, priceRange: newRange });
  };

  const handleMultiSelect = (field: 'location' | 'eventType' | 'amenities', value: string) => {
    const currentValues = localFilters[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    setLocalFilters({ ...localFilters, [field]: newValues });
  };

  const handleApplyFilters = () => {
    onFiltersChange(localFilters);
    onClose();
  };

  const handleClearAll = () => {
    const clearedFilters: FilterOptions = {
      priceRange: [0, 200000],
      guestCapacity: '',
      location: [],
      eventType: [],
      amenities: [],
      rating: 0
    };
    setLocalFilters(clearedFilters);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="w-full bg-white rounded-t-3xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Filters</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <i className="ri-close-line text-xl text-gray-600"></i>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-4 space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="text-xs text-gray-600 mb-1 block">Min Price</label>
                  <input
                    type="number"
                    value={localFilters.priceRange[0]}
                    onChange={(e) => handlePriceChange(0, parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-gray-600 mb-1 block">Max Price</label>
                  <input
                    type="number"
                    value={localFilters.priceRange[1]}
                    onChange={(e) => handlePriceChange(1, parseInt(e.target.value) || 200000)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                    placeholder="200000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Guest Capacity */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Guest Capacity</h3>
            <div className="space-y-2">
              {capacityOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setLocalFilters({ ...localFilters, guestCapacity: 
                    localFilters.guestCapacity === option.value ? '' : option.value 
                  })}
                  className={`w-full px-3 py-2 rounded-lg text-sm text-left transition-all ${
                    localFilters.guestCapacity === option.value
                      ? 'bg-orange-100 text-orange-700 border border-orange-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
            <div className="grid grid-cols-2 gap-2">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => handleMultiSelect('location', location)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    localFilters.location.includes(location)
                      ? 'bg-orange-100 text-orange-700 border border-orange-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          {/* Event Type */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Event Type</h3>
            <div className="grid grid-cols-2 gap-2">
              {eventTypes.map((eventType) => (
                <button
                  key={eventType}
                  onClick={() => handleMultiSelect('eventType', eventType)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    localFilters.eventType.includes(eventType)
                      ? 'bg-orange-100 text-orange-700 border border-orange-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {eventType}
                </button>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Amenities</h3>
            <div className="grid grid-cols-2 gap-2">
              {amenitiesList.map((amenity) => (
                <button
                  key={amenity}
                  onClick={() => handleMultiSelect('amenities', amenity)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    localFilters.amenities.includes(amenity)
                      ? 'bg-orange-100 text-orange-700 border border-orange-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Rating</h3>
            <div className="space-y-2">
              {ratingOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setLocalFilters({ ...localFilters, rating: option.value })}
                  className={`w-full px-3 py-2 rounded-lg text-sm text-left transition-all ${
                    localFilters.rating === option.value
                      ? 'bg-orange-100 text-orange-700 border border-orange-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex gap-3">
            <button
              onClick={handleClearAll}
              className="flex-1 py-3 rounded-full font-semibold text-sm border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
            >
              Clear All
            </button>
            <button
              onClick={handleApplyFilters}
              className="flex-1 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg transition-all"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
