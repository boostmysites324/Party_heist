import { useState } from 'react';
import { PlanningData } from '../page';

interface StepProps {
  data: PlanningData;
  updateData: (field: keyof PlanningData, value: any) => void;
  onNext: () => void;
}

interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  image: string;
}

export default function Step7Addons({ data, updateData, onNext }: StepProps) {
  const [selectedAddons, setSelectedAddons] = useState<string[]>(data.addons || []);

  const addons: Addon[] = [
    {
      id: 'dj',
      name: 'DJ & Music',
      description: 'Professional DJ with sound system',
      price: 15000,
      icon: 'ri-music-2-fill',
      image: 'Professional DJ setup with turntables and sound equipment, modern music system, colorful lights, event entertainment, high quality details, simple background'
    },
    {
      id: 'photography',
      name: 'Photography',
      description: 'Professional photographer & videographer',
      price: 25000,
      icon: 'ri-camera-fill',
      image: 'Professional photographer with DSLR camera, photography equipment, event coverage, high quality details, simple background'
    },
    {
      id: 'entertainment',
      name: 'Live Entertainment',
      description: 'Dancers, singers, or performers',
      price: 20000,
      icon: 'ri-mic-fill',
      image: 'Live entertainment performance on stage, professional performers, event show, vibrant atmosphere, high quality details, simple background'
    },
    {
      id: 'makeup',
      name: 'Makeup Artist',
      description: 'Professional makeup and styling',
      price: 12000,
      icon: 'ri-brush-fill',
      image: 'Professional makeup artist working, beauty services, cosmetics and brushes, elegant setup, high quality details, simple background'
    },
    {
      id: 'valet',
      name: 'Valet Parking',
      description: 'Professional valet service',
      price: 8000,
      icon: 'ri-parking-box-fill',
      image: 'Professional valet parking service, attendants in uniform, organized parking area, high quality details, simple background'
    },
    {
      id: 'host',
      name: 'Event Host/MC',
      description: 'Professional event host',
      price: 10000,
      icon: 'ri-user-voice-fill',
      image: 'Professional event host with microphone, MC on stage, confident presenter, high quality details, simple background'
    },
  ];

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleSkip = () => {
    updateData('addons', []);
    onNext();
  };

  const handleNext = () => {
    updateData('addons', selectedAddons);
    onNext();
  };

  const totalPrice = addons
    .filter(addon => selectedAddons.includes(addon.id))
    .reduce((sum, addon) => sum + addon.price, 0);

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Add-on Services</h2>
        <p className="text-sm text-gray-600">Select additional services or skip</p>
      </div>

      {/* Addon Cards */}
      <div className="grid grid-cols-2 gap-3">
        {addons.map((addon) => {
          const isSelected = selectedAddons.includes(addon.id);
          return (
            <button
              key={addon.id}
              onClick={() => toggleAddon(addon.id)}
              className={`bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all text-left relative ${
                isSelected ? 'ring-4 ring-purple-600 ring-offset-2' : ''
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-purple-600 rounded-full">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
              )}
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full">
                <i className={`${addon.icon} text-purple-600 text-xl`}></i>
              </div>
              <h3 className="font-semibold text-sm text-gray-900 text-center mb-1">{addon.name}</h3>
              <p className="text-xs text-gray-600 text-center mb-2">{addon.description}</p>
              <p className="text-base font-bold text-purple-600 text-center">₹{addon.price.toLocaleString()}</p>
            </button>
          );
        })}
      </div>

      {/* Selected Summary */}
      {selectedAddons.length > 0 && (
        <div className="bg-purple-50 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">{selectedAddons.length} add-ons selected</p>
              <p className="text-xs text-gray-600 mt-1">Total: ₹{totalPrice.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}

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
          className="flex-1 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl active:scale-95 transition-all"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
