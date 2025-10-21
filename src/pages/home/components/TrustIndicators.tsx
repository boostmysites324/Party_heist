
export default function TrustIndicators() {
  const stats = [
    { number: '5000+', label: 'Events Planned', icon: 'ri-calendar-event-line' },
    { number: '10,000+', label: 'Happy Clients', icon: 'ri-user-heart-line' },
    { number: '4.8', label: 'Rating', icon: 'ri-star-fill' },
  ];

  return (
    <div className="px-4 py-6 bg-gradient-to-r from-orange-50 to-pink-50">
      <h2 className="text-lg font-bold text-gray-900 text-center mb-4">Trusted by Thousands</h2>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center bg-white rounded-2xl p-4 shadow-sm border border-orange-100">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className={`${stat.icon} text-white text-lg`}></i>
            </div>
            <div className="text-xl font-bold text-gray-900">{stat.number}</div>
            <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
