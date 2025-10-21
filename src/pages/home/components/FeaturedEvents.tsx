
import { useNavigate } from 'react-router-dom';

export default function FeaturedEvents() {
  const navigate = useNavigate();

  const occasions = [
    { 
      id: 'birthday',
      title: 'Birthday Party',
      subtitle: 'Make it memorable',
      image: 'Beautiful birthday celebration with colorful balloon arch, elegant cake table setup, modern party decorations, pastel color scheme, professional event photography, high quality details, joyful celebration atmosphere, soft natural lighting, sophisticated party design, clean modern background'
    },
    { 
      id: 'wedding',
      title: 'Wedding Events',
      subtitle: 'Your dream wedding',
      image: 'Stunning Indian wedding mandap with intricate floral decorations, marigold garlands, traditional red and gold decor, elegant drapery, romantic ambiance, professional wedding photography, luxurious venue setup, warm golden lighting, beautiful traditional elements, sophisticated design'
    },
    { 
      id: 'corporate',
      title: 'Corporate Events',
      subtitle: 'Professional gatherings',
      image: 'Modern corporate event venue with professional stage setup, elegant lighting design, contemporary conference hall, sophisticated business decor, high-tech audio visual equipment, professional event photography, clean organized layout, premium corporate atmosphere'
    },
    { 
      id: 'anniversary',
      title: 'Anniversary',
      subtitle: 'Celebrate love',
      image: 'Romantic anniversary dinner setup with elegant table decoration, beautiful flower arrangements, candles, sophisticated dining atmosphere, intimate celebration, professional photography, warm romantic lighting, luxurious table setting, elegant romantic decor'
    },
  ];

  return (
    <div className="px-4 py-6 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Events by Occasion</h2>
        <button className="text-sm text-orange-600 font-semibold">View All</button>
      </div>
      
      <div className="space-y-3">
        {occasions.map((occasion) => (
          <button
            key={occasion.id}
            onClick={() => navigate('/plan-party', { state: { occasion: occasion.id } })}
            className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all active:scale-98 border border-gray-100"
          >
            <div className="flex items-center gap-4 p-3">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28occasion.image%29%7D&width=100&height=100&seq=${occasion.id}-event-new&orientation=squarish`}
                  alt={occasion.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-base text-gray-900">{occasion.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{occasion.subtitle}</p>
              </div>
              <i className="ri-arrow-right-s-line text-xl text-orange-500"></i>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
