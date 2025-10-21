
import { useNavigate } from 'react-router-dom';

export default function ServiceCategories() {
  const navigate = useNavigate();

  const categories = [
    { 
      id: 'bulk-food',
      title: 'Bulk Food',
      image: 'icon, 3D cartoon style, Delicious Indian food spread with biryani, curry bowls, and traditional dishes, vibrant colors with soft gradients, the icon should take up 70% of the frame, isolated on white background, centered composition, appetizing presentation, clean modern look, high detail quality, playful and inviting aesthetic',
      route: '/bulk-food'
    },
    { 
      id: 'catering',
      title: 'Catering',
      image: 'icon, 3D cartoon style, Professional catering service with elegant serving dishes and food presentation, sophisticated setup, vibrant colors with soft gradients, the icon should take up 70% of the frame, isolated on white background, centered composition, clean modern look, high detail quality',
      route: '/catering'
    },
    { 
      id: 'venues',
      title: 'Venues',
      image: 'icon, 3D cartoon style, Beautiful event venue hall with elegant decoration and modern lighting, banquet hall interior, vibrant colors with soft gradients, the icon should take up 70% of the frame, isolated on white background, centered composition, clean modern look, high detail quality',
      route: '/venues'
    },
    { 
      id: 'decoration',
      title: 'Decoration',
      image: 'icon, 3D cartoon style, Colorful party decorations with balloons, flowers, and elegant setup, festive decor arrangement, vibrant colors with soft gradients, the icon should take up 70% of the frame, isolated on white background, centered composition, clean modern look, high detail quality',
      route: '/decoration'
    },
    { 
      id: 'entertainment',
      title: 'Entertainment',
      image: 'icon, 3D cartoon style, DJ equipment and music entertainment setup, professional audio system with colorful lights, vibrant colors with soft gradients, the icon should take up 70% of the frame, isolated on white background, centered composition, clean modern look, high detail quality',
      route: '/entertainment'
    },
    { 
      id: 'photography',
      title: 'Photography',
      image: 'icon, 3D cartoon style, Professional camera and photography equipment, modern DSLR camera with lens, vibrant colors with soft gradients, the icon should take up 70% of the frame, isolated on white background, centered composition, clean modern look, high detail quality',
      route: '/photography'
    },
  ];

  return (
    <div className="px-4 py-6 bg-white">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Our Services</h2>
      <div className="grid grid-cols-3 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => navigate(category.route)}
            className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 hover:shadow-lg transition-all active:scale-95 border border-orange-100"
          >
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img 
                src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28category.image%29%7D&width=100&height=100&seq=${category.id}-new&orientation=squarish`}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-semibold text-gray-900 text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">{category.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
