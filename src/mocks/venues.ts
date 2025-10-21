
export const venues = [
  {
    id: 'v1',
    name: 'Grand Ballroom Palace',
    location: 'Banjara Hills, Hyderabad',
    address: 'Road No. 12, Banjara Hills, Hyderabad, Telangana 500034',
    rating: 4.8,
    reviewCount: 156,
    capacity: { min: 200, max: 500 },
    pricing: { startingPrice: 75000, perPlate: 1200 },
    images: [
      'https://readdy.ai/api/search-image?query=Luxurious%20grand%20ballroom%20interior%20with%20crystal%20chandeliers%2C%20elegant%20round%20tables%20with%20white%20linens%2C%20golden%20chairs%2C%20marble%20floors%2C%20warm%20ambient%20lighting%2C%20wedding%20reception%20setup%2C%20opulent%20decor%2C%20high%20ceilings%2C%20professional%20event%20photography%2C%20sophisticated%20atmosphere&width=400&height=300&seq=ballroom1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Elegant%20ballroom%20wedding%20ceremony%20setup%20with%20white%20chairs%20in%20rows%2C%20beautiful%20floral%20arch%2C%20crystal%20chandeliers%20overhead%2C%20marble%20columns%2C%20luxury%20venue%20interior%2C%20professional%20wedding%20photography%2C%20romantic%20lighting%2C%20sophisticated%20decor&width=400&height=300&seq=ballroom2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Grand%20ballroom%20cocktail%20party%20setup%20with%20high%20cocktail%20tables%2C%20elegant%20bar%20area%2C%20crystal%20chandeliers%2C%20marble%20floors%2C%20luxury%20interior%20design%2C%20professional%20event%20photography%2C%20warm%20golden%20lighting%2C%20sophisticated%20atmosphere&width=400&height=300&seq=ballroom3&orientation=landscape'
    ],
    category: ['Wedding', 'Corporate'],
    amenities: ['AC', 'Parking', 'In-house Catering', 'Sound System', 'Projector', 'WiFi', 'Valet Parking', 'Bridal Room'],
    foodPolicy: 'In-house Catering Only',
    description: 'An opulent ballroom featuring crystal chandeliers, marble floors, and world-class amenities. Perfect for grand weddings and corporate galas.',
    highlights: ['Crystal Chandeliers', 'Marble Flooring', 'Valet Parking', 'Bridal Suite'],
    reviews: [
      { name: 'Priya Sharma', rating: 5, comment: 'Absolutely stunning venue! The chandeliers and marble floors created the perfect ambiance for our wedding.', date: '2024-01-15' },
      { name: 'Rajesh Kumar', rating: 5, comment: 'Professional service and beautiful decor. Our corporate event was a huge success here.', date: '2024-01-10' },
      { name: 'Anita Reddy', rating: 4, comment: 'Gorgeous venue with excellent catering. The staff was very accommodating.', date: '2024-01-05' }
    ]
  },
  {
    id: 'v2',
    name: 'Garden Paradise Resort',
    location: 'Jubilee Hills, Hyderabad',
    address: 'Plot No. 45, Jubilee Hills, Hyderabad, Telangana 500033',
    rating: 4.6,
    reviewCount: 89,
    capacity: { min: 100, max: 300 },
    pricing: { startingPrice: 45000, perPlate: 800 },
    images: [
      'https://readdy.ai/api/search-image?query=Beautiful%20outdoor%20garden%20wedding%20venue%20with%20lush%20green%20lawns%2C%20fairy%20string%20lights%20hanging%20from%20trees%2C%20white%20chairs%20arranged%20for%20ceremony%2C%20natural%20landscape%2C%20romantic%20evening%20lighting%2C%20professional%20wedding%20photography%2C%20elegant%20outdoor%20setup&width=400&height=300&seq=garden1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Garden%20party%20setup%20with%20round%20tables%20under%20fairy%20lights%2C%20outdoor%20dining%20area%20surrounded%20by%20greenery%2C%20romantic%20ambiance%2C%20string%20lights%20in%20trees%2C%20elegant%20outdoor%20event%2C%20professional%20photography%2C%20natural%20setting&width=400&height=300&seq=garden2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Outdoor%20garden%20pavilion%20with%20white%20tent%2C%20surrounded%20by%20beautiful%20landscaping%2C%20fairy%20lights%2C%20natural%20greenery%2C%20elegant%20outdoor%20venue%2C%20professional%20event%20photography%2C%20romantic%20garden%20setting&width=400&height=300&seq=garden3&orientation=landscape'
    ],
    category: ['Wedding', 'Birthday'],
    amenities: ['Outdoor Setting', 'Parking', 'Outside Catering Allowed', 'Garden', 'Fairy Lights', 'WiFi', 'Restrooms'],
    foodPolicy: 'Outside Catering Allowed',
    description: 'A beautiful garden resort with lush greenery and fairy lights, perfect for outdoor celebrations and intimate gatherings.',
    highlights: ['Lush Gardens', 'Fairy Light Setup', 'Natural Ambiance', 'Outdoor Dining'],
    reviews: [
      { name: 'Meera Patel', rating: 5, comment: 'The garden setting was magical! Perfect for our outdoor wedding ceremony.', date: '2024-01-12' },
      { name: 'Vikram Singh', rating: 4, comment: 'Beautiful natural setting. The fairy lights created a wonderful atmosphere.', date: '2024-01-08' },
      { name: 'Kavya Nair', rating: 5, comment: 'Loved the outdoor setup. Great for intimate celebrations.', date: '2024-01-03' }
    ]
  },
  {
    id: 'v3',
    name: 'Skyline Rooftop Terrace',
    location: 'HITEC City, Hyderabad',
    address: 'Tower 3, HITEC City, Hyderabad, Telangana 500081',
    rating: 4.7,
    reviewCount: 124,
    capacity: { min: 50, max: 200 },
    pricing: { startingPrice: 60000, perPlate: 1000 },
    images: [
      'https://readdy.ai/api/search-image?query=Modern%20rooftop%20terrace%20venue%20with%20stunning%20city%20skyline%20view%20at%20sunset%2C%20elegant%20outdoor%20furniture%2C%20glass%20railings%2C%20urban%20landscape%20background%2C%20sophisticated%20rooftop%20party%20setup%2C%20professional%20event%20photography%2C%20contemporary%20design&width=400&height=300&seq=rooftop1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Rooftop%20cocktail%20party%20with%20city%20lights%20in%20background%2C%20modern%20bar%20setup%2C%20elegant%20seating%20areas%2C%20urban%20skyline%20view%2C%20evening%20atmosphere%2C%20professional%20event%20photography%2C%20sophisticated%20outdoor%20venue&width=400&height=300&seq=rooftop2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Rooftop%20wedding%20ceremony%20with%20city%20skyline%20backdrop%2C%20modern%20outdoor%20setup%2C%20glass%20railings%2C%20urban%20venue%2C%20elegant%20chairs%20arranged%20for%20ceremony%2C%20professional%20wedding%20photography%2C%20contemporary%20rooftop%20design&width=400&height=300&seq=rooftop3&orientation=landscape'
    ],
    category: ['Corporate', 'Birthday'],
    amenities: ['City View', 'AC Lounge', 'Parking', 'Bar', 'Outside Catering Allowed', 'WiFi', 'Sound System'],
    foodPolicy: 'Both Options Available',
    description: 'A modern rooftop venue offering breathtaking city views, perfect for corporate events and stylish celebrations.',
    highlights: ['360° City Views', 'Modern Design', 'Sunset Views', 'Urban Ambiance'],
    reviews: [
      { name: 'Arjun Reddy', rating: 5, comment: 'Amazing city views! Perfect venue for our corporate launch event.', date: '2024-01-14' },
      { name: 'Sneha Gupta', rating: 4, comment: 'Beautiful rooftop with great ambiance. The sunset views were spectacular.', date: '2024-01-09' },
      { name: 'Rohit Sharma', rating: 5, comment: 'Modern venue with excellent facilities. Great for networking events.', date: '2024-01-06' }
    ]
  },
  {
    id: 'v4',
    name: 'Heritage Mansion',
    location: 'Secunderabad, Hyderabad',
    address: 'MG Road, Secunderabad, Hyderabad, Telangana 500003',
    rating: 4.5,
    reviewCount: 67,
    capacity: { min: 80, max: 250 },
    pricing: { startingPrice: 55000, perPlate: 900 },
    images: [
      'https://readdy.ai/api/search-image?query=Elegant%20heritage%20mansion%20interior%20with%20colonial%20architecture%2C%20vintage%20chandeliers%2C%20ornate%20pillars%2C%20classic%20furniture%2C%20traditional%20Indian%20palace%20decor%2C%20professional%20event%20photography%2C%20royal%20ambiance%2C%20heritage%20venue&width=400&height=300&seq=heritage1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Heritage%20mansion%20courtyard%20wedding%20setup%20with%20traditional%20Indian%20architecture%2C%20ornate%20pillars%2C%20vintage%20decor%2C%20classical%20design%20elements%2C%20royal%20palace%20interior%2C%20professional%20wedding%20photography%2C%20elegant%20heritage%20venue&width=400&height=300&seq=heritage2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Colonial%20heritage%20mansion%20dining%20hall%20with%20vintage%20furniture%2C%20ornate%20ceiling%2C%20traditional%20architecture%2C%20classic%20Indian%20palace%20interior%2C%20elegant%20heritage%20venue%2C%20professional%20event%20photography%2C%20royal%20atmosphere&width=400&height=300&seq=heritage3&orientation=landscape'
    ],
    category: ['Wedding', 'Cultural'],
    amenities: ['Heritage Architecture', 'Parking', 'In-house Catering', 'Courtyard', 'Traditional Decor', 'WiFi'],
    foodPolicy: 'In-house Catering Only',
    description: 'A magnificent heritage mansion with colonial architecture and traditional charm, ideal for cultural events and royal celebrations.',
    highlights: ['Colonial Architecture', 'Heritage Charm', 'Traditional Decor', 'Royal Ambiance'],
    reviews: [
      { name: 'Lakshmi Devi', rating: 5, comment: 'Perfect heritage venue for our traditional wedding. The architecture is stunning.', date: '2024-01-11' },
      { name: 'Suresh Babu', rating: 4, comment: 'Beautiful colonial architecture. Great for cultural events.', date: '2024-01-07' },
      { name: 'Radha Krishna', rating: 4, comment: 'Lovely heritage venue with authentic charm.', date: '2024-01-02' }
    ]
  },
  {
    id: 'v5',
    name: 'Lakeside Pavilion',
    location: 'Gachibowli, Hyderabad',
    address: 'Financial District, Gachibowli, Hyderabad, Telangana 500032',
    rating: 4.4,
    reviewCount: 92,
    capacity: { min: 60, max: 180 },
    pricing: { startingPrice: 40000, perPlate: 750 },
    images: [
      'https://readdy.ai/api/search-image?query=Serene%20lakeside%20pavilion%20venue%20with%20beautiful%20water%20view%2C%20elegant%20outdoor%20pavilion%20structure%2C%20peaceful%20lake%20setting%2C%20natural%20landscape%2C%20romantic%20waterside%20venue%2C%20professional%20event%20photography%2C%20tranquil%20atmosphere&width=400&height=300&seq=lakeside1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Lakeside%20wedding%20ceremony%20with%20pavilion%20overlooking%20water%2C%20elegant%20outdoor%20setup%2C%20natural%20lake%20backdrop%2C%20peaceful%20venue%2C%20romantic%20waterside%20setting%2C%20professional%20wedding%20photography%2C%20serene%20atmosphere&width=400&height=300&seq=lakeside2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Lakeside%20reception%20area%20with%20tables%20overlooking%20water%2C%20elegant%20outdoor%20dining%20setup%2C%20peaceful%20lake%20view%2C%20natural%20venue%20setting%2C%20professional%20event%20photography%2C%20tranquil%20waterside%20ambiance&width=400&height=300&seq=lakeside3&orientation=landscape'
    ],
    category: ['Wedding', 'Birthday'],
    amenities: ['Lake View', 'Outdoor Setting', 'Parking', 'Outside Catering Allowed', 'Pavilion', 'Natural Setting'],
    foodPolicy: 'Outside Catering Allowed',
    description: 'A serene lakeside venue offering peaceful water views and natural beauty, perfect for intimate celebrations.',
    highlights: ['Lake Views', 'Natural Beauty', 'Peaceful Setting', 'Outdoor Pavilion'],
    reviews: [
      { name: 'Deepika Rao', rating: 5, comment: 'The lake view was absolutely beautiful. Perfect for our intimate wedding.', date: '2024-01-13' },
      { name: 'Kiran Kumar', rating: 4, comment: 'Peaceful venue with lovely natural setting. Great for small gatherings.', date: '2024-01-04' },
      { name: 'Pooja Mehta', rating: 4, comment: 'Beautiful lakeside location. Very serene and romantic.', date: '2024-01-01' }
    ]
  },
  {
    id: 'v6',
    name: 'Urban Loft Studio',
    location: 'Kondapur, Hyderabad',
    address: 'Cyber Towers, Kondapur, Hyderabad, Telangana 500084',
    rating: 4.3,
    reviewCount: 78,
    capacity: { min: 30, max: 120 },
    pricing: { startingPrice: 35000, perPlate: 650 },
    images: [
      'https://readdy.ai/api/search-image?query=Modern%20industrial%20loft%20venue%20with%20exposed%20brick%20walls%2C%20high%20ceilings%2C%20contemporary%20furniture%2C%20urban%20design%2C%20trendy%20event%20space%2C%20professional%20event%20photography%2C%20industrial%20chic%20atmosphere%2C%20modern%20lighting&width=400&height=300&seq=loft1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Urban%20loft%20party%20setup%20with%20industrial%20design%2C%20exposed%20brick%20walls%2C%20modern%20furniture%2C%20contemporary%20event%20space%2C%20trendy%20venue%20interior%2C%20professional%20event%20photography%2C%20industrial%20chic%20style&width=400&height=300&seq=loft2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Industrial%20loft%20studio%20with%20modern%20design%2C%20exposed%20brick%20walls%2C%20contemporary%20lighting%2C%20urban%20venue%20interior%2C%20trendy%20event%20space%2C%20professional%20photography%2C%20industrial%20chic%20atmosphere&width=400&height=300&seq=loft3&orientation=landscape'
    ],
    category: ['Corporate', 'Birthday'],
    amenities: ['Modern Design', 'AC', 'Parking', 'Outside Catering Allowed', 'Sound System', 'WiFi', 'Industrial Decor'],
    foodPolicy: 'Outside Catering Allowed',
    description: 'A trendy urban loft with industrial design and modern amenities, perfect for contemporary events and creative gatherings.',
    highlights: ['Industrial Design', 'Modern Amenities', 'Urban Style', 'Creative Space'],
    reviews: [
      { name: 'Aarti Jain', rating: 4, comment: 'Love the industrial design! Perfect for our modern corporate event.', date: '2024-01-10' },
      { name: 'Nikhil Agarwal', rating: 4, comment: 'Trendy venue with great atmosphere. Good for creative events.', date: '2024-01-05' },
      { name: 'Ritu Singh', rating: 4, comment: 'Modern and stylish venue. Great for contemporary celebrations.', date: '2023-12-30' }
    ]
  },
  {
    id: 'v7',
    name: 'Royal Palace Banquet',
    location: 'Madhapur, Hyderabad',
    address: 'HITEC City Road, Madhapur, Hyderabad, Telangana 500081',
    rating: 4.9,
    reviewCount: 203,
    capacity: { min: 300, max: 800 },
    pricing: { startingPrice: 95000, perPlate: 1500 },
    images: [
      'https://readdy.ai/api/search-image?query=Magnificent%20royal%20palace%20banquet%20hall%20with%20golden%20pillars%2C%20ornate%20ceiling%20with%20intricate%20carvings%2C%20luxurious%20red%20carpet%2C%20crystal%20chandeliers%2C%20royal%20throne%20setup%2C%20opulent%20Indian%20palace%20interior%2C%20professional%20event%20photography%2C%20majestic%20atmosphere%2C%20grand%20architecture&width=400&height=300&seq=royal1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Royal%20palace%20wedding%20ceremony%20with%20golden%20mandap%2C%20ornate%20decorations%2C%20traditional%20Indian%20royal%20architecture%2C%20luxurious%20red%20and%20gold%20decor%2C%20crystal%20chandeliers%2C%20professional%20wedding%20photography%2C%20majestic%20palace%20interior%2C%20opulent%20celebration%20setup&width=400&height=300&seq=royal2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Grand%20royal%20banquet%20reception%20with%20golden%20tables%2C%20luxurious%20chairs%2C%20ornate%20ceiling%2C%20crystal%20chandeliers%2C%20royal%20palace%20interior%2C%20opulent%20dining%20setup%2C%20professional%20event%20photography%2C%20majestic%20atmosphere%2C%20traditional%20Indian%20palace%20decor&width=400&height=300&seq=royal3&orientation=landscape'
    ],
    category: ['Wedding', 'Cultural'],
    amenities: ['Royal Architecture', 'Valet Parking', 'In-house Catering', 'Sound System', 'AC', 'Bridal Suite', 'Traditional Decor', 'WiFi', 'Security'],
    foodPolicy: 'In-house Catering Only',
    description: 'A magnificent royal palace banquet hall with golden pillars and ornate architecture, perfect for grand Indian weddings and cultural celebrations.',
    highlights: ['Royal Architecture', 'Golden Pillars', 'Crystal Chandeliers', 'Bridal Suite'],
    reviews: [
      { name: 'Maharani Priya', rating: 5, comment: 'Absolutely royal experience! The golden decor made our wedding feel like a fairy tale.', date: '2024-01-18' },
      { name: 'Rajesh Maharaj', rating: 5, comment: 'Perfect venue for our traditional ceremony. The architecture is breathtaking.', date: '2024-01-16' },
      { name: 'Sita Devi', rating: 5, comment: 'Magnificent palace setting. Every detail was perfect for our cultural event.', date: '2024-01-12' }
    ]
  },
  {
    id: 'v8',
    name: 'Oceanview Beach Resort',
    location: 'Shamirpet, Hyderabad',
    address: 'Shamirpet Lake Road, Shamirpet, Hyderabad, Telangana 500078',
    rating: 4.6,
    reviewCount: 145,
    capacity: { min: 80, max: 250 },
    pricing: { startingPrice: 55000, perPlate: 950 },
    images: [
      'https://readdy.ai/api/search-image?query=Beautiful%20lakeside%20beach%20resort%20venue%20with%20white%20sand%2C%20palm%20trees%2C%20elegant%20white%20pavilion%2C%20crystal%20clear%20water%20view%2C%20tropical%20paradise%20setting%2C%20professional%20event%20photography%2C%20romantic%20beachside%20atmosphere%2C%20luxury%20resort%20ambiance&width=400&height=300&seq=beach1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Beach%20wedding%20ceremony%20with%20white%20chairs%20on%20sand%2C%20elegant%20arch%20overlooking%20water%2C%20palm%20trees%2C%20tropical%20paradise%20setting%2C%20romantic%20lakeside%20venue%2C%20professional%20wedding%20photography%2C%20serene%20beach%20atmosphere%2C%20luxury%20resort%20setup&width=400&height=300&seq=beach2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Beachside%20reception%20with%20tables%20on%20white%20sand%2C%20fairy%20lights%2C%20palm%20trees%2C%20water%20view%2C%20tropical%20paradise%20venue%2C%20elegant%20outdoor%20dining%2C%20professional%20event%20photography%2C%20romantic%20beach%20setting%2C%20luxury%20resort%20ambiance&width=400&height=300&seq=beach3&orientation=landscape'
    ],
    category: ['Wedding', 'Birthday'],
    amenities: ['Beach Setting', 'Lake View', 'Outdoor Dining', 'Parking', 'Outside Catering Allowed', 'Resort Facilities', 'WiFi', 'Natural Setting'],
    foodPolicy: 'Both Options Available',
    description: 'A stunning lakeside beach resort offering tropical paradise vibes with white sand and crystal clear waters, perfect for destination-style celebrations.',
    highlights: ['Beach Setting', 'Crystal Waters', 'Palm Trees', 'Tropical Paradise'],
    reviews: [
      { name: 'Aditi Sharma', rating: 5, comment: 'Felt like a destination wedding! The beach setting was absolutely magical.', date: '2024-01-17' },
      { name: 'Karthik Reddy', rating: 4, comment: 'Beautiful lakeside venue with amazing tropical vibes. Perfect for our celebration.', date: '2024-01-13' },
      { name: 'Nisha Patel', rating: 5, comment: 'Stunning beach resort. The white sand and palm trees created perfect ambiance.', date: '2024-01-09' }
    ]
  },
  {
    id: 'v9',
    name: 'Crystal Dome Convention',
    location: 'Kukatpally, Hyderabad',
    address: 'KPHB Colony, Kukatpally, Hyderabad, Telangana 500072',
    rating: 4.7,
    reviewCount: 189,
    capacity: { min: 400, max: 1000 },
    pricing: { startingPrice: 120000, perPlate: 1800 },
    images: [
      'https://readdy.ai/api/search-image?query=Futuristic%20crystal%20dome%20convention%20center%20with%20transparent%20glass%20ceiling%2C%20modern%20architecture%2C%20LED%20lighting%2C%20spacious%20interior%2C%20contemporary%20design%2C%20professional%20event%20photography%2C%20high-tech%20venue%2C%20sophisticated%20atmosphere%2C%20large%20capacity%20hall&width=400&height=300&seq=dome1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Crystal%20dome%20corporate%20event%20with%20modern%20stage%20setup%2C%20LED%20screens%2C%20contemporary%20seating%2C%20glass%20ceiling%2C%20futuristic%20architecture%2C%20professional%20event%20photography%2C%20high-tech%20convention%20center%2C%20sophisticated%20business%20venue&width=400&height=300&seq=dome2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Grand%20crystal%20dome%20wedding%20reception%20with%20elegant%20round%20tables%2C%20modern%20lighting%2C%20glass%20ceiling%2C%20contemporary%20decor%2C%20futuristic%20venue%20interior%2C%20professional%20wedding%20photography%2C%20sophisticated%20atmosphere%2C%20large%20banquet%20setup&width=400&height=300&seq=dome3&orientation=landscape'
    ],
    category: ['Corporate', 'Wedding'],
    amenities: ['Glass Dome', 'LED Lighting', 'AC', 'Parking', 'In-house Catering', 'Sound System', 'Projector', 'WiFi', 'Security', 'Modern Design'],
    foodPolicy: 'In-house Catering Only',
    description: 'A futuristic crystal dome convention center with transparent glass ceiling and modern architecture, ideal for large corporate events and grand celebrations.',
    highlights: ['Glass Dome Ceiling', 'LED Lighting', 'Modern Architecture', 'Large Capacity'],
    reviews: [
      { name: 'Tech CEO Arjun', rating: 5, comment: 'Incredible futuristic venue! Perfect for our product launch. The glass dome was stunning.', date: '2024-01-19' },
      { name: 'Event Manager Priya', rating: 5, comment: 'Amazing convention center with all modern facilities. Great for large events.', date: '2024-01-15' },
      { name: 'Corporate Head Raj', rating: 4, comment: 'Impressive architecture and excellent facilities. Professional service throughout.', date: '2024-01-11' }
    ]
  },
  {
    id: 'v10',
    name: 'Vintage Wine Cellar',
    location: 'Film Nagar, Hyderabad',
    address: 'Road No. 78, Film Nagar, Hyderabad, Telangana 500096',
    rating: 4.5,
    reviewCount: 98,
    capacity: { min: 40, max: 100 },
    pricing: { startingPrice: 45000, perPlate: 1100 },
    images: [
      'https://readdy.ai/api/search-image?query=Elegant%20vintage%20wine%20cellar%20venue%20with%20wooden%20barrels%2C%20stone%20walls%2C%20dim%20warm%20lighting%2C%20rustic%20charm%2C%20wine%20bottles%20displayed%2C%20intimate%20dining%20setup%2C%20professional%20event%20photography%2C%20cozy%20atmosphere%2C%20sophisticated%20wine%20bar%20ambiance&width=400&height=300&seq=wine1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Wine%20cellar%20private%20dining%20with%20wooden%20tables%2C%20stone%20walls%2C%20wine%20barrels%2C%20warm%20candlelight%2C%20intimate%20setting%2C%20rustic%20elegance%2C%20professional%20event%20photography%2C%20cozy%20wine%20bar%20atmosphere%2C%20vintage%20charm&width=400&height=300&seq=wine2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Vintage%20wine%20cellar%20party%20setup%20with%20wooden%20furniture%2C%20stone%20architecture%2C%20wine%20displays%2C%20warm%20lighting%2C%20intimate%20venue%2C%20rustic%20sophistication%2C%20professional%20event%20photography%2C%20cozy%20cellar%20atmosphere%2C%20elegant%20wine%20bar&width=400&height=300&seq=wine3&orientation=landscape'
    ],
    category: ['Birthday', 'Corporate'],
    amenities: ['Wine Collection', 'Intimate Setting', 'AC', 'Parking', 'Outside Catering Allowed', 'Bar', 'WiFi', 'Vintage Decor'],
    foodPolicy: 'Outside Catering Allowed',
    description: 'An intimate vintage wine cellar with stone walls and wooden barrels, perfect for sophisticated gatherings and wine tastings.',
    highlights: ['Wine Collection', 'Stone Walls', 'Intimate Atmosphere', 'Vintage Charm'],
    reviews: [
      { name: 'Wine Enthusiast Maya', rating: 5, comment: 'Perfect intimate venue! The wine collection and ambiance were exceptional.', date: '2024-01-16' },
      { name: 'Sommelier Vikash', rating: 4, comment: 'Beautiful wine cellar with great atmosphere. Perfect for wine events.', date: '2024-01-12' },
      { name: 'Food Critic Ananya', rating: 5, comment: 'Charming vintage venue with excellent wine selection. Very sophisticated.', date: '2024-01-08' }
    ]
  },
  {
    id: 'v11',
    name: 'Floating Lotus Pavilion',
    location: 'Hussain Sagar, Hyderabad',
    address: 'Tank Bund Road, Hussain Sagar, Hyderabad, Telangana 500080',
    rating: 4.8,
    reviewCount: 167,
    capacity: { min: 70, max: 200 },
    pricing: { startingPrice: 70000, perPlate: 1250 },
    images: [
      'https://readdy.ai/api/search-image?query=Stunning%20floating%20pavilion%20on%20water%20with%20lotus-shaped%20architecture%2C%20elegant%20white%20structure%20over%20lake%2C%20beautiful%20water%20reflections%2C%20unique%20venue%20design%2C%20professional%20event%20photography%2C%20serene%20water%20setting%2C%20romantic%20floating%20venue&width=400&height=300&seq=floating1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Floating%20pavilion%20wedding%20ceremony%20with%20lotus%20design%2C%20elegant%20setup%20over%20water%2C%20beautiful%20lake%20views%2C%20unique%20floating%20venue%2C%20romantic%20water%20setting%2C%20professional%20wedding%20photography%2C%20serene%20atmosphere%2C%20magical%20floating%20structure&width=400&height=300&seq=floating2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Floating%20pavilion%20reception%20with%20tables%20over%20water%2C%20lotus-shaped%20architecture%2C%20elegant%20dining%20setup%2C%20beautiful%20lake%20reflections%2C%20unique%20floating%20venue%2C%20professional%20event%20photography%2C%20romantic%20water%20setting%2C%20magical%20atmosphere&width=400&height=300&seq=floating3&orientation=landscape'
    ],
    category: ['Wedding', 'Cultural'],
    amenities: ['Floating Venue', 'Water Views', 'Unique Architecture', 'Parking', 'In-house Catering', 'Sound System', 'WiFi', 'Boat Access'],
    foodPolicy: 'In-house Catering Only',
    description: 'A unique floating pavilion with lotus-inspired architecture over Hussain Sagar lake, offering an unforgettable venue experience.',
    highlights: ['Floating Structure', 'Lotus Design', 'Water Views', 'Unique Experience'],
    reviews: [
      { name: 'Bride Kavitha', rating: 5, comment: 'Most unique venue ever! The floating pavilion made our wedding truly magical.', date: '2024-01-18' },
      { name: 'Event Planner Suresh', rating: 5, comment: 'Incredible floating venue with stunning architecture. Guests were amazed.', date: '2024-01-14' },
      { name: 'Photographer Ravi', rating: 4, comment: 'Beautiful unique venue with amazing photo opportunities. Very special location.', date: '2024-01-10' }
    ]
  }
];

export const eventTypes = [
  'Wedding',
  'Birthday',
  'Corporate',
  'Cultural',
  'Outdoor'
];

export const locations = [
  'Banjara Hills',
  'Jubilee Hills',
  'HITEC City',
  'Gachibowli',
  'Secunderabad',
  'Kondapur',
  'Madhapur',
  'Shamirpet',
  'Kukatpally',
  'Film Nagar',
  'Hussain Sagar'
];

export const amenitiesList = [
  'AC',
  'Parking',
  'In-house Catering',
  'Outside Catering Allowed',
  'Sound System',
  'Projector',
  'WiFi',
  'Valet Parking',
  'Bridal Room',
  'Garden',
  'Fairy Lights',
  'City View',
  'Bar',
  'Heritage Architecture',
  'Courtyard',
  'Traditional Decor',
  'Lake View',
  'Outdoor Setting',
  'Pavilion',
  'Natural Setting',
  'Modern Design',
  'Industrial Decor',
  'Royal Architecture',
  'Security',
  'Beach Setting',
  'Resort Facilities',
  'Glass Dome',
  'LED Lighting',
  'Wine Collection',
  'Intimate Setting',
  'Vintage Decor',
  'Floating Venue',
  'Water Views',
  'Unique Architecture',
  'Boat Access'
];
