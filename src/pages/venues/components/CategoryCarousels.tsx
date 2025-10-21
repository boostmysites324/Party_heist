
export default function CategoryCarousels() {
  const eventTypes = [
    { 
      id: 'wedding', 
      name: 'Wedding',
      image: 'icon, 3D cartoon wedding rings with delicate flowers, elegant bridal elements, soft pink and white color palette, romantic theme, the icon should take up 70% of the frame, vibrant colors with soft gradients, minimalist design, smooth rounded shapes, subtle shading, no outlines, centered composition, isolated on white background, playful and friendly aesthetic, isometric perspective, high detail quality, clean and modern look, single object focus'
    },
    { 
      id: 'birthday', 
      name: 'Birthday',
      image: 'icon, 3D cartoon birthday cake with colorful candles and balloons, festive celebration elements, bright cheerful colors, joyful theme, the icon should take up 70% of the frame, vibrant colors with soft gradients, minimalist design, smooth rounded shapes, subtle shading, no outlines, centered composition, isolated on white background, playful and friendly aesthetic, isometric perspective, high detail quality, clean and modern look, single object focus'
    },
    { 
      id: 'corporate', 
      name: 'Corporate',
      image: 'icon, 3D cartoon professional briefcase with modern office elements, business theme, sophisticated blue and gray colors, professional atmosphere, the icon should take up 70% of the frame, vibrant colors with soft gradients, minimalist design, smooth rounded shapes, subtle shading, no outlines, centered composition, isolated on white background, playful and friendly aesthetic, isometric perspective, high detail quality, clean and modern look, single object focus'
    },
    { 
      id: 'anniversary', 
      name: 'Anniversar',
      image: 'icon, 3D cartoon champagne glasses with hearts and celebration elements, romantic anniversary theme, elegant gold and red colors, love celebration, the icon should take up 70% of the frame, vibrant colors with soft gradients, minimalist design, smooth rounded shapes, subtle shading, no outlines, centered composition, isolated on white background, playful and friendly aesthetic, isometric perspective, high detail quality, clean and modern look, single object focus'
    },
  ];

  const locations = [
    { 
      id: 'banjara', 
      name: 'Banjara Hills',
      image: 'Elegant upscale neighborhood with modern luxury buildings, beautiful tree-lined streets, sophisticated urban landscape, premium residential area, professional photography, high quality details, clean architecture, well-maintained surroundings, bright daylight, clear blue sky, simple clean background, photorealistic style'
    },
    { 
      id: 'jubilee', 
      name: 'Jubilee Hills',
      image: 'Premium residential area with contemporary architecture, lush green surroundings, upscale neighborhood, modern buildings with glass facades, professional photography, high quality details, sophisticated urban setting, well-planned layout, bright natural lighting, clear sky, simple clean background, photorealistic style'
    },
    { 
      id: 'gachibowli', 
      name: 'Gachibowli',
      image: 'Modern tech hub with sleek office buildings, contemporary architecture, IT park landscape, professional business district, high-rise buildings, professional photography, high quality details, urban development, clean modern design, bright daylight, clear sky, simple clean background, photorealistic style'
    },
    { 
      id: 'secunderabad', 
      name: 'Secunderab',
      image: 'Historic city area with blend of colonial and modern architecture, cultural landmarks, vibrant urban landscape, heritage buildings, professional photography, high quality details, diverse architectural styles, bustling city atmosphere, bright daylight, clear sky, simple clean background, photorealistic style'
    },
  ];

  return (
    <div className="bg-white">
      {/* Event Types */}
      <div className="px-4 py-5">
        <h2 className="text-base font-bold text-gray-900 mb-3">Browse by Event Type</h2>
        <div className="grid grid-cols-4 gap-3">
          {eventTypes.map((type) => (
            <button
              key={type.id}
              className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center shadow-sm">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28type.image%29%7D&width=100&height=100&seq=${type.id}-icon-v2&orientation=squarish`}
                  alt={type.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Locations */}
      <div className="px-4 py-5 bg-gradient-to-br from-orange-50/30 to-pink-50/30">
        <h2 className="text-base font-bold text-gray-900 mb-3">Popular Locations</h2>
        <div className="grid grid-cols-4 gap-3">
          {locations.map((location) => (
            <button
              key={location.id}
              className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28location.image%29%7D&width=100&height=100&seq=${location.id}-loc-v2&orientation=squarish`}
                  alt={location.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">{location.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
