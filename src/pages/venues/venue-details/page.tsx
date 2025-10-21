
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ImageGallery from './components/ImageGallery';
import VenueHeader from './components/VenueHeader';
import VenueDetails from './components/VenueDetails';
import VenueAmenities from './components/VenueAmenities';
import CustomerReviews from './components/CustomerReviews';
import { venues } from '../../../mocks/venues';
import { Venue } from '../types';

export default function VenueDetailsPage() {
  const { venueId } = useParams();
  const navigate = useNavigate();
  const [venue, setVenue] = useState<Venue | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const foundVenue = venues.find(v => v.id === venueId);
    if (foundVenue) {
      setVenue(foundVenue);
      setIsWishlisted(foundVenue.isWishlisted || false);
    } else {
      navigate('/venues');
    }
  }, [venueId, navigate]);

  const handleBack = () => {
    navigate('/venues');
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handlePlanEvent = () => {
    navigate('/plan-party', { 
      state: { 
        preSelectedVenue: venue,
        skipVenueStep: true 
      } 
    });
  };

  if (!venue) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Loading venue details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="flex items-center justify-between px-4 py-4">
          <button 
            onClick={handleBack}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95"
          >
            <i className="ri-arrow-left-line text-xl text-gray-900"></i>
          </button>
          <h1 className="text-lg font-bold text-gray-900">Venue Details</h1>
          <button
            onClick={handleWishlistToggle}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95"
          >
            <i className={`${isWishlisted ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 pb-24">
        {/* Image Gallery */}
        <ImageGallery images={venue.images} venueName={venue.name} />

        {/* Venue Information */}
        <div className="px-4 space-y-6">
          <VenueHeader venue={venue} />
          <VenueDetails venue={venue} />
          <VenueAmenities amenities={venue.amenities} />
          <CustomerReviews venueId={venue.id} rating={venue.rating} reviewCount={venue.reviewCount} />
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4">
        <button
          onClick={handlePlanEvent}
          className="w-full py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all"
        >
          Plan an Event Here
        </button>
      </div>
    </div>
  );
}
