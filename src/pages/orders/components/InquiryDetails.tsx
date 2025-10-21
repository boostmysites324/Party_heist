
import { useNavigate, useParams } from 'react-router-dom';

export default function InquiryDetails() {
  const navigate = useNavigate();
  const { inquiryId } = useParams();

  // Mock inquiry data - in real app, fetch based on inquiryId
  const inquiryData = {
    id: 'PH-B2B-101',
    status: 'Supervisor Assigned',
    submittedDate: '10 November 2024',
    inquiry: {
      companyName: 'TechCorp Solutions Pvt Ltd',
      eventType: 'Corporate Annual Meet',
      guestCount: 750,
      eventDate: '15 December 2024',
      eventTime: '6:00 PM',
      duration: '4 hours',
      venue: 'Hyderabad International Convention Centre',
      requirements: 'Need full event management including stage setup, audio-visual equipment, catering for 750 people, entertainment, and photography services.',
      budget: '₹15,00,000 - ₹20,00,000',
      contactPerson: 'Amit Sharma',
      contactEmail: 'amit.sharma@techcorp.com',
      contactPhone: '+91 98765 43210'
    },
    supervisor: {
      name: 'Rajesh Kumar',
      photo: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20event%20manager%20in%20formal%20attire%2C%20confident%20smile%2C%20office%20background%2C%20corporate%20headshot%20style%2C%20high%20quality%20portrait&width=100&height=100&seq=supervisor1&orientation=squarish',
      phone: '+91 87654 32109',
      whatsapp: '+91 87654 32109',
      designation: 'Senior Event Manager',
      experience: '8+ years in corporate events'
    },
    documents: [
      {
        name: 'Event_Proposal_v1.pdf',
        uploadDate: '12 November 2024',
        size: '2.4 MB'
      },
      {
        name: 'Venue_Layout_Plan.pdf',
        uploadDate: '14 November 2024',
        size: '1.8 MB'
      },
      {
        name: 'Final_Quote.pdf',
        uploadDate: '16 November 2024',
        size: '1.2 MB'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'supervisor assigned':
        return 'bg-orange-100 text-orange-800';
      case 'in review':
        return 'bg-yellow-100 text-yellow-800';
      case 'submitted':
        return 'bg-gray-100 text-gray-800';
      case 'quote sent':
        return 'bg-blue-100 text-blue-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCall = () => {
    window.open(`tel:${inquiryData.supervisor.phone}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = `Hi ${inquiryData.supervisor.name}, I'm contacting regarding my inquiry ${inquiryData.id}`;
    window.open(`https://wa.me/${inquiryData.supervisor.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDocumentDownload = (docName: string) => {
    // In real app, this would download the actual document
    alert(`Downloading ${docName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 pb-6">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-4 px-4 py-4">
          <button 
            onClick={() => navigate('/orders')}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-orange-600 transition-colors"
          >
            <i className="ri-arrow-left-line text-lg"></i>
          </button>
          <h1 className="text-xl font-bold text-gray-800">Inquiry Details</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Inquiry Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{inquiryData.id}</h2>
              <p className="text-gray-600 mt-1">Submitted on {inquiryData.submittedDate}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(inquiryData.status)}`}>
              {inquiryData.status}
            </span>
          </div>
        </div>

        {/* Inquiry Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Inquiry Summary</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Company Name</label>
                <p className="text-gray-800">{inquiryData.inquiry.companyName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Event Type</label>
                <p className="text-gray-800">{inquiryData.inquiry.eventType}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Guest Count</label>
                <p className="text-gray-800">{inquiryData.inquiry.guestCount} Guests</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Event Date & Time</label>
                <p className="text-gray-800">{inquiryData.inquiry.eventDate} • {inquiryData.inquiry.eventTime}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Duration</label>
                <p className="text-gray-800">{inquiryData.inquiry.duration}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Budget Range</label>
                <p className="text-gray-800">{inquiryData.inquiry.budget}</p>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-600">Preferred Venue</label>
              <p className="text-gray-800">{inquiryData.inquiry.venue}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-600">Requirements</label>
              <p className="text-gray-800">{inquiryData.inquiry.requirements}</p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <label className="text-sm font-medium text-gray-600">Contact Information</label>
              <div className="mt-2 space-y-1">
                <p className="text-gray-800">{inquiryData.inquiry.contactPerson}</p>
                <p className="text-gray-600">{inquiryData.inquiry.contactEmail}</p>
                <p className="text-gray-600">{inquiryData.inquiry.contactPhone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Supervisor Details */}
        {inquiryData.supervisor && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Dedicated Event Manager</h3>
            <div className="flex items-start gap-4 mb-6">
              <img 
                src={inquiryData.supervisor.photo}
                alt={inquiryData.supervisor.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 text-lg">{inquiryData.supervisor.name}</h4>
                <p className="text-orange-600 font-medium">{inquiryData.supervisor.designation}</p>
                <p className="text-gray-600 text-sm">{inquiryData.supervisor.experience}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={handleCall}
                className="bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
              >
                <i className="ri-phone-line"></i>
                Call Supervisor
              </button>
              <button 
                onClick={handleWhatsApp}
                className="bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-all flex items-center justify-center gap-2"
              >
                <i className="ri-whatsapp-line"></i>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Documents & Quotes */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Documents & Quotes</h3>
          {inquiryData.documents.length > 0 ? (
            <div className="space-y-3">
              {inquiryData.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <i className="ri-file-pdf-line text-red-600"></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{doc.name}</p>
                      <p className="text-gray-600 text-sm">{doc.uploadDate} • {doc.size}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDocumentDownload(doc.name)}
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <i className="ri-download-line text-lg"></i>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="ri-file-line text-2xl text-gray-400"></i>
              </div>
              <p className="text-gray-600">No documents uploaded yet</p>
              <p className="text-gray-500 text-sm mt-1">Your supervisor will upload proposals and quotes here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
