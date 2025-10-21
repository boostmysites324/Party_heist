import { useState } from 'react';
import { PlanningData } from '../page';

interface StepProps {
  data: PlanningData;
  updateData: (field: keyof PlanningData, value: any) => void;
  onNext: () => void;
}

export default function Step2DateTime({ data, updateData, onNext }: StepProps) {
  const [showWarning, setShowWarning] = useState(false);

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM',
  ];

  const handleDateChange = (date: string) => {
    updateData('date', date);
    
    const selectedDate = new Date(date);
    const now = new Date();
    const hoursDiff = (selectedDate.getTime() - now.getTime()) / (1000 * 60 * 60);
    
    if (hoursDiff < 18) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  const handleNext = () => {
    if (data.date && data.time) {
      onNext();
    }
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">When's the Party?</h2>
        <p className="text-sm text-gray-600">Select your preferred date and time</p>
      </div>

      {/* Date Selection */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <label className="block text-sm font-semibold text-gray-900 mb-3">Event Date</label>
        <input
          type="date"
          value={data.date}
          onChange={(e) => handleDateChange(e.target.value)}
          min={minDate}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:border-purple-600 focus:outline-none"
        />
      </div>

      {/* Warning Banner */}
      {showWarning && (
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <i className="ri-alert-fill text-yellow-600 text-xl mt-0.5"></i>
            <div>
              <p className="text-sm font-semibold text-yellow-900 mb-1">18-Hour Minimum Notice</p>
              <p className="text-xs text-yellow-800">Food services require at least 18 hours advance booking. Please select a later date or contact us for urgent requests.</p>
            </div>
          </div>
        </div>
      )}

      {/* Time Selection */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <label className="block text-sm font-semibold text-gray-900 mb-3">Event Time</label>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => updateData('time', time)}
              className={`py-3 px-2 rounded-xl text-sm font-medium transition-all ${
                data.time === time
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleNext}
        disabled={!data.date || !data.time}
        className={`w-full py-4 rounded-full font-semibold text-base shadow-lg transition-all ${
          data.date && data.time
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl active:scale-95'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Continue
      </button>
    </div>
  );
}
