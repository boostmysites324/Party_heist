import { useState } from 'react';
import { PlanningData } from '../page';

interface StepProps {
  data: PlanningData;
  updateData: (field: keyof PlanningData, value: any) => void;
  onNext: () => void;
}

interface FoodItem {
  id: string;
  name: string;
  category: string;
  type: 'veg' | 'non-veg';
  price: number;
  serves: number;
  image: string;
}

export default function Step5Food({ data, updateData, onNext }: StepProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItems, setSelectedItems] = useState<FoodItem[]>(data.food || []);

  const categories = ['all', 'starters', 'main-course', 'desserts', 'beverages'];

  const foodItems: FoodItem[] = [
    {
      id: 'f1',
      name: 'Paneer Tikka',
      category: 'starters',
      type: 'veg',
      price: 350,
      serves: 10,
      image: 'Delicious paneer tikka skewers with colorful bell peppers, grilled to perfection, Indian appetizer, professional food photography, high quality details, appetizing presentation, garnished with herbs, simple clean background'
    },
    {
      id: 'f2',
      name: 'Chicken Biryani',
      category: 'main-course',
      type: 'non-veg',
      price: 450,
      serves: 10,
      image: 'Aromatic chicken biryani in traditional serving dish, fragrant basmati rice with tender chicken pieces, Indian cuisine, professional food photography, high quality details, garnished with fried onions and herbs, simple background'
    },
    {
      id: 'f3',
      name: 'Veg Pulao',
      category: 'main-course',
      type: 'veg',
      price: 300,
      serves: 10,
      image: 'Colorful vegetable pulao with mixed vegetables and aromatic rice, Indian rice dish, professional food photography, high quality details, garnished with cashews and raisins, simple clean background'
    },
    {
      id: 'f4',
      name: 'Gulab Jamun',
      category: 'desserts',
      type: 'veg',
      price: 200,
      serves: 10,
      image: 'Sweet gulab jamun dessert in sugar syrup, traditional Indian sweet, professional food photography, high quality details, golden brown color, garnished with pistachios, simple background'
    },
    {
      id: 'f5',
      name: 'Tandoori Chicken',
      category: 'starters',
      type: 'non-veg',
      price: 400,
      serves: 10,
      image: 'Tandoori chicken pieces with vibrant red color, grilled Indian appetizer, professional food photography, high quality details, garnished with lemon and onion rings, simple clean background'
    },
    {
      id: 'f6',
      name: 'Fresh Juice Bar',
      category: 'beverages',
      type: 'veg',
      price: 250,
      serves: 10,
      image: 'Assorted fresh fruit juices in elegant glasses, colorful beverages, professional photography, high quality details, refreshing drinks, garnished with fruit slices, simple background'
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? foodItems 
    : foodItems.filter(item => item.category === selectedCategory);

  const toggleItem = (item: FoodItem) => {
    const isSelected = selectedItems.some(i => i.id === item.id);
    if (isSelected) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSkip = () => {
    updateData('food', []);
    onNext();
  };

  const handleNext = () => {
    updateData('food', selectedItems);
    onNext();
  };

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Food Menu</h2>
        <p className="text-sm text-gray-600">Choose items or skip this step</p>
      </div>

      {/* 18-hour Warning */}
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <i className="ri-time-fill text-yellow-600 text-lg mt-0.5"></i>
          <p className="text-xs text-yellow-800">Food orders require 18 hours advance notice</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      {/* Food Items */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const isSelected = selectedItems.some(i => i.id === item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggleItem(item)}
              className={`w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all text-left ${
                isSelected ? 'ring-4 ring-purple-600 ring-offset-2' : ''
              }`}
            >
              <div className="flex gap-3 p-3">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28item.image%29%7D&width=100&height=100&seq=${item.id}&orientation=squarish`}
                    alt={item.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-base text-gray-900">{item.name}</h3>
                    {isSelected && (
                      <i className="ri-checkbox-circle-fill text-purple-600 text-xl"></i>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-3 h-3 rounded-full border-2 ${
                      item.type === 'veg' ? 'border-green-600' : 'border-red-600'
                    }`}>
                      <span className={`block w-1.5 h-1.5 rounded-full m-0.5 ${
                        item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'
                      }`}></span>
                    </span>
                    <span className="text-xs text-gray-600">Serves {item.serves}</span>
                  </div>
                  <p className="text-lg font-bold text-purple-600">₹{item.price}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Summary */}
      {selectedItems.length > 0 && (
        <div className="bg-purple-50 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">{selectedItems.length} items selected</p>
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
          Continue
        </button>
      </div>
    </div>
  );
}
