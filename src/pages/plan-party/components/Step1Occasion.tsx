import { PlanningData } from '../page';

interface StepProps {
  data: PlanningData;
  updateData: (field: keyof PlanningData, value: any) => void;
  onNext: () => void;
}

export default function Step1Occasion({ data, updateData, onNext }: StepProps) {
  const occasions = [
    { id: 'birthday', label: 'Birthday Party', icon: 'ri-cake-3-fill', color: 'from-pink-500 to-rose-500' },
    { id: 'wedding', label: 'Wedding', icon: 'ri-heart-fill', color: 'from-red-500 to-pink-500' },
    { id: 'anniversary', label: 'Anniversary', icon: 'ri-gift-fill', color: 'from-purple-500 to-pink-500' },
    { id: 'corporate', label: 'Corporate Event', icon: 'ri-briefcase-fill', color: 'from-blue-500 to-indigo-500' },
    { id: 'engagement', label: 'Engagement', icon: 'ri-heart-2-fill', color: 'from-rose-500 to-pink-500' },
    { id: 'baby-shower', label: 'Baby Shower', icon: 'ri-bear-smile-fill', color: 'from-yellow-500 to-orange-500' },
    { id: 'graduation', label: 'Graduation', icon: 'ri-graduation-cap-fill', color: 'from-green-500 to-teal-500' },
    { id: 'festival', label: 'Festival', icon: 'ri-sparkling-fill', color: 'from-orange-500 to-red-500' },
    { id: 'other', label: 'Other', icon: 'ri-more-fill', color: 'from-gray-500 to-gray-600' },
  ];

  const handleSelect = (occasionId: string) => {
    updateData('occasion', occasionId);
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What's the Occasion?</h2>
        <p className="text-sm text-gray-600">Select the type of event you're planning</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {occasions.map((occasion) => (
          <button
            key={occasion.id}
            onClick={() => handleSelect(occasion.id)}
            className={`relative overflow-hidden rounded-2xl p-5 text-white shadow-md hover:shadow-lg transition-all active:scale-95 ${
              data.occasion === occasion.id ? 'ring-4 ring-purple-600 ring-offset-2' : ''
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${occasion.color}`}></div>
            <div className="relative">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full">
                <i className={`${occasion.icon} text-2xl`}></i>
              </div>
              <span className="text-sm font-semibold block">{occasion.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
