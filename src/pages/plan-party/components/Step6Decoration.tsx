import { useState } from 'react';
import { PlanningData } from '../page';

interface StepProps {
  data: PlanningData;
  updateData: (field: keyof PlanningData, value: any) => void;
  onNext: () => void;
}

interface DecorationTheme {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  includes: string[];
}

export default function Step6Decoration({ data, updateData, onNext }: StepProps) {
  const [selectedTheme, setSelectedTheme] = useState<DecorationTheme | null>(data.decoration);

  const themes: DecorationTheme[] = [
    {
      id: 'd1',
      name: 'Royal Elegance',
      description: 'Luxurious gold and white theme',
      price: 35000,
      image: 'Elegant royal wedding decoration with gold and white color scheme, luxurious draping, crystal chandeliers, floral arrangements, professional event photography, high quality details, sophisticated setup, simple background',
      includes: ['Floral Arrangements', 'Draping', 'Lighting', 'Centerpieces']
    },
    {
      id: 'd2',
      name: 'Garden Romance',
      description: 'Fresh flowers and greenery',
      price: 28000,
      image: 'Beautiful garden theme decoration with fresh flowers, lush greenery, natural elements, romantic ambiance, professional photography, high quality details, elegant floral setup, simple background',
      includes: ['Fresh Flowers', 'Green Walls', 'Fairy Lights', 'Arch Decor']
    },
    {
      id: 'd3',
      name: 'Modern Minimalist',
      description: 'Clean and contemporary design',
      price: 22000,
      image: 'Modern minimalist event decoration with clean lines, contemporary design, elegant simplicity, professional photography, high quality details, sophisticated color palette, simple background',
      includes: ['LED Lighting', 'Geometric Decor', 'Minimal Florals', 'Backdrop']
    },
    {
      id: 'd4',
      name: 'Bollywood Glam',
      description: 'Vibrant and colorful theme',
      price: 32000,
      image: 'Vibrant Bollywood theme decoration with colorful drapes, bright lights, festive elements, energetic ambiance, professional photography, high quality details, glamorous setup, simple background',
      includes: ['Colorful Draping', 'Stage Setup', 'Props', 'Lighting Effects']
    },
    {
      id: 'd5',
      name: 'Rustic Charm',
      description: 'Vintage and earthy elements',
      price: 25000,
      image: 'Rustic vintage decoration with wooden elements, earthy tones, vintage props, charming ambiance, professional photography, high quality details, natural aesthetic, simple background',
      includes: ['Wooden Elements', 'Vintage Props', 'String Lights', 'Burlap Decor']
    },
  ];

  const handleThemeSelect = (theme: DecorationTheme) => {
    setSelectedTheme(theme);
    updateData('decoration', theme);
  };

  const handleSkip = () => {
    updateData('decoration', null);
    onNext();
  };

  const handleNext = () => {
    if (selectedTheme) {
      updateData('decoration', selectedTheme);
    }
    onNext();
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Decoration</h2>
        <p className="text-sm text-gray-600">Select a theme or skip this step</p>
      </div>

      {/* Theme Cards */}
      <div className="space-y-3">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => handleThemeSelect(theme)}
            className={`w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all text-left ${
              selectedTheme?.id === theme.id ? 'ring-4 ring-purple-600 ring-offset-2' : ''
            }`}
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28theme.image%29%7D&width=375&height=192&seq=${theme.id}&orientation=landscape`}
                alt={theme.name}
                className="w-full h-full object-cover object-top"
              />
              {selectedTheme?.id === theme.id && (
                <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full">
                  <i className="ri-check-line text-white text-lg"></i>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-base text-gray-900">{theme.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{theme.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-purple-600">₹{theme.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {theme.includes.map((item, idx) => (
                  <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-lg flex items-center gap-1">
                    <i className="ri-check-line text-xs"></i>
                    {item}
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
          disabled={!selectedTheme}
          className={`flex-1 py-4 rounded-full font-semibold text-base shadow-lg transition-all ${
            selectedTheme
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
