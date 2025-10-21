
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNav from '../../components/feature/BottomNav';

export default function B2BInquiry() {
  const navigate = useNavigate();
  const location = useLocation();
  const planningData = location.state?.planningData;

  const [formData, setFormData] = useState({
    companyName: '',
    eventType: '',
    guestRange: planningData?.guestCount || '',
    venueRequirement: '',
    catering: false,
    decoration: false,
    avNeeds: false,
    branding: false,
    budget: '',
    paymentTerms: '',
    pocName: '',
    pocDesignation: '',
    pocEmail: '',
    pocMobile: '',
    additionalNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=I need help with corporate event planning', '_blank');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md w-full text-center">
          <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-full">
            <i className="ri-checkbox-circle-fill text-green-600 text-4xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Inquiry Submitted!</h2>
          <p className="text-sm text-gray-600 mb-6">
            Thank you for your interest. A dedicated Event Supervisor will contact you shortly to discuss your corporate event requirements.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/')}
              className="w-full py-4 rounded-full font-semibold text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl active:scale-95 transition-all"
            >
              Back to Home
            </button>
            <button
              onClick={handleCall}
              className="w-full py-4 rounded-full font-semibold text-base border-2 border-purple-600 text-purple-600 hover:bg-purple-50 active:scale-95 transition-all"
            >
              <i className="ri-phone-fill mr-2"></i>
              Call Now for Immediate Assistance
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="flex items-center justify-between px-4 py-4">
          <button 
            onClick={() => navigate(-1)} 
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95"
          >
            <i className="ri-arrow-left-line text-xl text-gray-900"></i>
          </button>
          <h1 className="text-base font-bold text-gray-900">Corporate Inquiry</h1>
          <div className="w-9"></div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 px-4">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <i className="ri-building-fill text-blue-600 text-xl mt-0.5"></i>
            <div>
              <p className="text-sm font-semibold text-blue-900 mb-1">Corporate Event Planning</p>
              <p className="text-xs text-blue-800">For events with 500+ guests, we provide dedicated event supervisors and customized solutions.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Information */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-base text-gray-900 mb-4">Company Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-purple-600 focus:outline-none"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Event Type *</label>
                <input
                  type="text"
                  required
                  value={formData.eventType}
                  onChange={(e) => handleChange('eventType', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-purple-600 focus:outline-none"
                  placeholder="e.g., Annual Conference, Product Launch"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Expected Guest Count *</label>
                <input
                  type="number"
                  required
                  value={formData.guestRange}
                  onChange={(e) => handleChange('guestRange', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-purple-600 focus:outline-none"
                  placeholder="Number of guests"
                />
              </div>
            </div>
          </div>

          {/* Venue Requirements */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-base text-gray-900 mb-4">Venue Requirements</h3>
            
            <div className="space-y-2">
              {['Have a venue', 'Need a venue', 'Need consultation'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleChange('venueRequirement', option)}
                  className={`w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                    formData.venueRequirement === option
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Service Requirements */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-base text-gray-900 mb-4">Service Requirements</h3>
            
            <div className="space-y-3">
              {[
                { id: 'catering', label: 'Catering Services', icon: 'ri-restaurant-fill' },
                { id: 'decoration', label: 'Decoration & Setup', icon: 'ri-palette-fill' },
                { id: 'avNeeds', label: 'AV & Technical Support', icon: 'ri-mic-fill' },
                { id: 'branding', label: 'Branding & Signage', icon: 'ri-price-tag-3-fill' },
              ].map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleChange(service.id, !formData[service.id as keyof typeof formData])}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    formData[service.id as keyof typeof formData]
                      ? 'bg-purple-50 border-2 border-purple-600'
                      : 'bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    formData[service.id as keyof typeof formData]
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    <i className={`${service.icon} text-lg`}></i>
                  </div>
                  <span className={`text-sm font-medium ${
                    formData[service.id as keyof typeof formData] ? 'text-purple-900' : 'text-gray-700'
                  }`}>
                    {service.label}
                  </span>
                  {formData[service.id as keyof typeof formData] && (
                    <i className="ri-check-line text-purple-600 ml-auto text-xl"></i>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Budget & Timeline */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-base text-gray-900 mb-4">Budget & Timeline</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Approximate Budget</label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => handleChange('budget', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-purple-600 focus:outline-none"
                  placeholder="e.g., 5-10 Lakhs"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Payment Terms Preference</label>
                <input
                  type="text"
                  value={formData.paymentTerms}
                  onChange={(e) => handleChange('paymentTerms', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-purple-600 focus:outline-none"
                  placeholder="e.g., 50% advance, 50% post-event"
                />
              </div>
            </div>
          </div>

          {/* Point of Contact */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-base text-gray-900 mb-4">Point of Contact</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.pocName}
                  onChange={(e) => handleChange('pocName', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-purple-600 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Designation</label>
                <input
                  type="text"
                  value={formData.pocDesignation}
                  onChange={(e) => handleChange('pocDesignation', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-purple-600 focus:outline-none"
                  placeholder="Your designation"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.pocEmail}
                  onChange={(e) => handleChange('pocEmail', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-purple-600 focus:outline-none"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.pocMobile}
                  onChange={(e) => handleChange('pocMobile', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-purple-600 focus:outline-none"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Additional Notes</label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleChange('additionalNotes', e.target.value)}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-purple-600 focus:outline-none resize-none"
                  placeholder="Any specific requirements or questions..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.additionalNotes.length}/500 characters</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-5 text-white">
            <h3 className="font-bold text-base mb-3">Need Immediate Assistance?</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleCall}
                className="bg-white/20 backdrop-blur-sm rounded-xl py-3 hover:bg-white/30 transition-all active:scale-95"
              >
                <i className="ri-phone-fill text-xl mb-1"></i>
                <p className="text-xs font-medium">Call Now</p>
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="bg-white/20 backdrop-blur-sm rounded-xl py-3 hover:bg-white/30 transition-all active:scale-95"
              >
                <i className="ri-whatsapp-fill text-xl mb-1"></i>
                <p className="text-xs font-medium">WhatsApp</p>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-full font-semibold text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl active:scale-95 transition-all"
          >
            Submit Inquiry
          </button>
        </form>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
