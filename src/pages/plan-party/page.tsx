
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Step1Occasion from './components/Step1Occasion';
import Step2DateTime from './components/Step2DateTime';
import Step3GuestCount from './components/Step3GuestCount';
import Step4Venue from './components/Step4Venue';
import Step5Food from './components/Step5Food';
import Step6Decoration from './components/Step6Decoration';
import Step7Addons from './components/Step7Addons';
import AssistanceBanner from '../../components/feature/AssistanceBanner';
import BottomNav from '../../components/feature/BottomNav';

export interface PlanningData {
  occasion: string;
  date: string;
  time: string;
  guestCount: number;
  venue: any;
  food: any[];
  decoration: any;
  addons: string[];
}

export default function PlanParty() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if venue is pre-selected from venue details page
  const preSelectedVenue = location.state?.preSelectedVenue;
  const skipVenueStep = location.state?.skipVenueStep;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [planningData, setPlanningData] = useState<PlanningData>({
    occasion: location.state?.occasion || '',
    date: '',
    time: '',
    guestCount: 0,
    venue: preSelectedVenue || null,
    food: [],
    decoration: null,
    addons: [],
  });

  const updateData = (field: keyof PlanningData, value: any) => {
    setPlanningData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 3 && planningData.guestCount > 500) {
      navigate('/b2b-inquiry', { state: { planningData } });
      return;
    }
    
    // Skip venue step if venue is pre-selected
    if (currentStep === 3 && skipVenueStep && preSelectedVenue) {
      setCurrentStep(5); // Skip to food step
      return;
    }
    
    if (currentStep < 7) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/checkout', { state: { planningData } });
    }
  };

  const handleBack = () => {
    // If venue was pre-selected and we're at food step, go back to guest count
    if (currentStep === 5 && skipVenueStep && preSelectedVenue) {
      setCurrentStep(3);
      return;
    }
    
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      navigate('/');
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <Step1Occasion data={planningData} updateData={updateData} onNext={handleNext} />;
      case 2:
        return <Step2DateTime data={planningData} updateData={updateData} onNext={handleNext} />;
      case 3:
        return <Step3GuestCount data={planningData} updateData={updateData} onNext={handleNext} />;
      case 4:
        return <Step4Venue data={planningData} updateData={updateData} onNext={handleNext} />;
      case 5:
        return <Step5Food data={planningData} updateData={updateData} onNext={handleNext} />;
      case 6:
        return <Step6Decoration data={planningData} updateData={updateData} onNext={handleNext} />;
      case 7:
        return <Step7Addons data={planningData} updateData={updateData} onNext={handleNext} />;
      default:
        return null;
    }
  };

  // Calculate total steps (6 if venue is pre-selected, 7 otherwise)
  const totalSteps = skipVenueStep && preSelectedVenue ? 6 : 7;
  // Adjust current step display for progress bar
  const displayStep = skipVenueStep && preSelectedVenue && currentStep >= 5 ? currentStep - 1 : currentStep;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="flex items-center justify-between px-4 py-4">
          <button 
            onClick={handleBack}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95"
          >
            <i className="ri-arrow-left-line text-xl text-gray-900"></i>
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-base font-bold text-gray-900">Plan Your Party</h1>
            <p className="text-xs text-gray-500">
              Step {displayStep} of {totalSteps}
              {preSelectedVenue && (
                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">
                  Venue Selected
                </span>
              )}
            </p>
          </div>
          <div className="w-9"></div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300"
            style={{ width: `${(displayStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 px-4">
        {renderStep()}

        {/* Assistance Banner */}
        <div className="mt-6">
          <AssistanceBanner />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
