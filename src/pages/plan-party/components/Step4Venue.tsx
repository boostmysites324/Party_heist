import { useState } from 'react';
import { PlanningData } from '../page';

interface StepProps {
  data: PlanningData;
  updateData: (field: keyof PlanningData, value: any) => void;
  onNext: () => void;
}

interface Venue {
  id: string;
  name: string;
  location: string;
  capacity: string;
  price: number;
  image: string;
  amenities: string[];
}

export default function Step4Venue({ data, updateData, onNext }: StepProps) {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(data.venue);

  const venues: Venue[] = [
    {
      id: 'v1',
      name: 'Grand Ballroom',
      location: 'Banjara Hills',
      capacity: '200-500',
      price: 75000,
      image: 'Luxurious grand ballroom with crystal chandeliers, elegant interior, spacious event hall, modern architecture, professional photography, high quality details, sophisticated lighting, polished marble floors, simple elegant background',
      amenities: ['AC', 'Parking', 'Stage', 'Sound System']
    },
    {
      id: 'v2',
      name: 'Garden Paradise',
      location: 'Jubilee Hills',
      capacity: '100-300',
      price: 50000,
      image: 'Beautiful outdoor garden venue with lush greenery, elegant lawn setup, fairy lights, natural landscape, professional photography, high quality details, romantic ambiance, well-maintained garden, simple background',
      amenities: ['Open Air', 'Garden', 'Parking', 'Catering Area']
    },
    {
      id: 'v3',
      name: 'Rooftop Terrace',
      location: 'Gachibowli',
      capacity: '50-150',
      price: 35000,
      image: 'Modern rooftop terrace venue with city skyline view, contemporary design, elegant outdoor setup, professional photography, high quality details, evening ambiance, stylish furniture, simple background',
      amenities: ['City View', 'AC Lounge', 'Bar', 'Parking']
    },
    {
      id: 'v4',
      name: 'Heritage Mansion',
      location: 'Secunderabad',
      capacity: '150-400',
      price: 65000,
      image: 'Elegant heritage mansion with traditional architecture, vintage charm, grand entrance, professional photography, high quality details, classic interior, ornate decorations, simple background',
      amenities: ['Heritage', 'Lawn', 'Indoor Hall', 'Parking']
    },
  ];

  const handleVenueSelect = (venue: Venue) => {
    setSelectedVenue(venue);
    updateData('venue', venue);
  };

  const handleSkip = () => {
    updateData('venue', null);
    onNext();
  };

  const handleNext = () => {
    if (selectedVenue) {
      updateData('venue', selectedVenue);
    }
    onNext();
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select a Venue</h2>
        <p className="text-sm text-gray-600">Choose from our partner venues or skip</p>
      </div>

      {/* Venue Cards */}
      <div className="space-y-3">
        {venues.map((venue) => (
          <button
            key={venue.id}
            onClick={() => handleVenueSelect(venue)}
            className={`w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all text-left ${
              selectedVenue?.id === venue.id ? 'ring-4 ring-purple-600 ring-offset-2' : ''
            }`}
          >
            <div className="h-40 overflow-hidden">
              <img 
                src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28venue.image%29%7D&width=375&height=160&seq=${venue.id}&orientation=landscape`}
                alt={venue.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-base text-gray-900">{venue.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    <i className="ri-map-pin-line"></i> {venue.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-purple-600">₹{venue.price.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">per event</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-group-line text-sm text-gray-600"></i>
                <span className="text-xs text-gray-600">{venue.capacity} guests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {venue.amenities.map((amenity, idx) => (
                  <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-lg">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={handleSkip}
          className="flex-1 py-4 rounded-full font-semibold text-base border-2 border-gray-300 text-gray-700 hover:bg-gray-50 active:scale-95 transition-all"
        >
          Not Required
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedVenue}
          className={`flex-1 py-4 rounded-full font-semibold text-base shadow-lg transition-all ${
            selectedVenue
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl active:scale-95'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
