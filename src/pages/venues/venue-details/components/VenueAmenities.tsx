
interface VenueAmenitiesProps {
  amenities: string[];
}

export default function VenueAmenities({ amenities }: VenueAmenitiesProps) {
  const getAmenityIcon = (amenity: string) => {
    const iconMap: { [key: string]: string } = {
      'AC': 'ri-temp-cold-line',
      'Parking': 'ri-parking-line',
      'WiFi': 'ri-wifi-line',
      'Sound System': 'ri-volume-up-line',
      'Projector': 'ri-projector-line',
      'Stage': 'ri-mic-line',
      'Bar': 'ri-goblet-line',
      'Pool': 'ri-water-flash-line',
      'Garden': 'ri-plant-line',
      'City View': 'ri-building-line',
      'Lake View': 'ri-water-flash-line',
      'Valet Parking': 'ri-car-line',
      'Catering Kitchen': 'ri-restaurant-line',
      'Bridal Room': 'ri-door-line',
      'Open Air': 'ri-sun-line',
      'Heritage': 'ri-ancient-gate-line',
      'Lawn': 'ri-plant-line',
      'Indoor Hall': 'ri-home-line',
      'Vintage Decor': 'ri-palette-line',
      'Photo Spots': 'ri-camera-line',
      'Restrooms': 'ri-door-line',
      'Gazebo': 'ri-home-4-line',
      'Boat Rides': 'ri-ship-line',
      'Pavilion': 'ri-building-2-line',
      'Industrial Design': 'ri-tools-line',
      'Flexible Space': 'ri-layout-line',
      'Elevator': 'ri-arrow-up-down-line'
    };
    return iconMap[amenity] || 'ri-check-line';
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Amenities</h3>
      <div className="grid grid-cols-2 gap-3">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 flex items-center justify-center bg-orange-100 rounded-lg">
              <i className={`${getAmenityIcon(amenity)} text-orange-600`}></i>
            </div>
            <span className="text-sm font-medium text-gray-900">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
