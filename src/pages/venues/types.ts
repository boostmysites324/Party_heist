
export interface Venue {
  id: string;
  name: string;
  location: string;
  address: string;
  rating: number;
  reviewCount: number;
  minCapacity: number;
  maxCapacity: number;
  price: number;
  priceType: 'per_plate' | 'venue_rental';
  foodPolicy: 'in_house_only' | 'outside_allowed' | 'both';
  images: string[];
  description: string;
  amenities: string[];
  eventTypes: string[];
  isWishlisted?: boolean;
}

export interface FilterOptions {
  priceRange: [number, number];
  guestCapacity: string;
  location: string[];
  eventType: string[];
  amenities: string[];
  rating: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  eventType: string;
}
