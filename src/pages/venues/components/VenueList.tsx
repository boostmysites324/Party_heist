
import VenueCard from './VenueCard';
import { Venue } from '../types';

interface VenueListProps {
  venues: Venue[];
}

export default function VenueList({ venues }: VenueListProps) {
  if (venues.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <i className="ri-building-line text-4xl text-gray-300"></i>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No venues found</h3>
        <p className="text-sm text-gray-600">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {venues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
}
