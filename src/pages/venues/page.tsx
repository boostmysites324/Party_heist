
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import FilterButton from './components/FilterButton';
import CategoryCarousels from './components/CategoryCarousels';
import VenueList from './components/VenueList';
import FilterModal from './components/FilterModal';
import BottomNav from '../../components/feature/BottomNav';
import { venues } from '../../mocks/venues';

interface Venue {
  id: string;
  name: string;
  location: string;
  address: string;
  rating: number;
  reviewCount: number;
  capacity: { min: number; max: number };
  pricing: { startingPrice: number; perPlate: number };
  images: string[];
  category: string[];
  amenities: string[];
  foodPolicy: string;
  description: string;
  highlights: string[];
  reviews: Array<{
    name: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}

interface FilterOptions {
  priceRange: [number, number];
  guestCapacity: string;
  location: string[];
  eventType: string[];
  amenities: string[];
  rating: number;
}

export default function VenuesPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>(venues);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 200000],
    guestCapacity: '',
    location: [],
    eventType: [],
    amenities: [],
    rating: 0
  });

  useEffect(() => {
    filterVenues();
  }, [searchQuery, filters]);

  const filterVenues = () => {
    let filtered = venues.filter(venue => {
      // Search filter
      const matchesSearch = !searchQuery || 
        venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.category.some(type => type.toLowerCase().includes(searchQuery.toLowerCase()));

      // Price filter
      const matchesPrice = venue.pricing.startingPrice >= filters.priceRange[0] && 
                          venue.pricing.startingPrice <= filters.priceRange[1];

      // Capacity filter
      const matchesCapacity = !filters.guestCapacity || 
        (filters.guestCapacity === '0-50' && venue.capacity.max <= 50) ||
        (filters.guestCapacity === '51-100' && venue.capacity.max >= 51 && venue.capacity.max <= 100) ||
        (filters.guestCapacity === '101-200' && venue.capacity.max >= 101 && venue.capacity.max <= 200) ||
        (filters.guestCapacity === '201-500' && venue.capacity.max >= 201 && venue.capacity.max <= 500) ||
        (filters.guestCapacity === '500+' && venue.capacity.max > 500);

      // Location filter
      const matchesLocation = filters.location.length === 0 || 
        filters.location.some(loc => venue.location.includes(loc));

      // Event type filter
      const matchesEventType = filters.eventType.length === 0 || 
        filters.eventType.some(type => venue.category.includes(type));

      // Amenities filter
      const matchesAmenities = filters.amenities.length === 0 || 
        filters.amenities.every(amenity => venue.amenities.includes(amenity));

      // Rating filter
      const matchesRating = venue.rating >= filters.rating;

      return matchesSearch && matchesPrice && matchesCapacity && 
             matchesLocation && matchesEventType && matchesAmenities && matchesRating;
    });

    setFilteredVenues(filtered);
  };

  const handleCategorySelect = (category: string, type: 'eventType' | 'location') => {
    if (type === 'eventType') {
      setSearchQuery(category);
    } else {
      setSearchQuery(category);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="flex items-center justify-between px-4 py-4">
          <button 
            onClick={handleBack}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95"
          >
            <i className="ri-arrow-left-line text-xl text-gray-900"></i>
          </button>
          <h1 className="text-lg font-bold text-gray-900">Venues</h1>
          <div className="w-9"></div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 px-4">
        {/* Search and Filter */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1">
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search venues, locations, events..."
            />
          </div>
          <FilterButton 
            onClick={() => setShowFilters(true)}
            hasActiveFilters={Object.values(filters).some(filter => 
              Array.isArray(filter) ? filter.length > 0 : filter !== 0 && filter !== ''
            )}
          />
        </div>

        {/* Category Carousels */}
        <CategoryCarousels onCategorySelect={handleCategorySelect} />

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            {filteredVenues.length} venues found
          </p>
        </div>

        {/* Venue List */}
        <VenueList venues={filteredVenues} />
      </div>

      {/* Filter Modal */}
      {showFilters && (
        <FilterModal
          filters={filters}
          onFiltersChange={setFilters}
          onClose={() => setShowFilters(false)}
        />
      )}

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
