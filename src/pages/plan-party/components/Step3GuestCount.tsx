import { useState } from 'react';
import { PlanningData } from '../page';

interface StepProps {
  data: PlanningData;
  updateData: (field: keyof PlanningData, value: any) => void;
  onNext: () => void;
}

export default function Step3GuestCount({ data, updateData, onNext }: StepProps) {
  const [count, setCount] = useState(data.guestCount || 50);

  const quickOptions = [25, 50, 100, 150, 200, 300, 500];

  const handleCountChange = (value: number) => {
    const newCount = Math.max(1, Math.min(10000, value));
    setCount(newCount);
    updateData('guestCount', newCount);
  };

  const handleNext = () => {
    if (count > 0) {
      updateData('guestCount', count);
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">How Many Guests?</h2>
        <p className="text-sm text-gray-600">Enter the expected number of attendees</p>
      </div>

      {/* Guest Counter */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => handleCountChange(count - 10)}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 rounded-full text-purple-600 hover:shadow-md active:scale-95 transition-all"
          >
            <i className="ri-subtract-line text-xl"></i>
          </button>
          
          <div className="text-center">
            <input
              type="number"
              value={count}
              onChange={(e) => handleCountChange(parseInt(e.target.value) || 0)}
              className="w-32 text-5xl font-bold text-center text-gray-900 border-none outline-none appearance-none"
              style={{ MozAppearance: 'textfield' }}
            />
            <p className="text-sm text-gray-600 mt-1">Guests</p>
          </div>
          
          <button
            onClick={() => handleCountChange(count + 10)}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 rounded-full text-purple-600 hover:shadow-md active:scale-95 transition-all"
          >
            <i className="ri-add-line text-xl"></i>
          </button>
        </div>

        {/* Range Slider */}
        <div className="relative">
          <input
            type="range"
            min="1"
            max="1000"
            value={count}
            onChange={(e) => handleCountChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, rgb(147 51 234) 0%, rgb(236 72 153) ${(count / 1000) * 100}%, rgb(243 232 255) ${(count / 1000) * 100}%, rgb(252 231 243) 100%)`
            }}
          />
        </div>
      </div>

      {/* Quick Options */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <label className="block text-sm font-semibold text-gray-900 mb-3">Quick Select</label>
        <div className="grid grid-cols-4 gap-2">
          {quickOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleCountChange(option)}
              className={`py-3 rounded-xl text-sm font-medium transition-all ${
                count === option
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* B2B Notice */}
      {count > 500 && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <i className="ri-information-fill text-blue-600 text-xl mt-0.5"></i>
            <div>
              <p className="text-sm font-semibold text-blue-900 mb-1">Corporate Event Detected</p>
              <p className="text-xs text-blue-800">For events with more than 500 guests, you'll be redirected to our corporate planning service with dedicated support.</p>
            </div>
          </div>
        </div>
      )}

      {/* Continue Button */}
      <button
        onClick={handleNext}
        disabled={count < 1}
        className={`w-full py-4 rounded-full font-semibold text-base shadow-lg transition-all ${
          count >= 1
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl active:scale-95'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {count > 500 ? 'Continue to Corporate Inquiry' : 'Continue'}
      </button>
    </div>
  );
}
