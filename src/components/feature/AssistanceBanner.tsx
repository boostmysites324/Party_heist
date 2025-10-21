
export default function AssistanceBanner() {
  return (
    <div className="mx-4 mb-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-4 border border-orange-100 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">Need assistance?</h3>
          <p className="text-xs text-gray-600">Our experts are here to help you plan the perfect event</p>
        </div>
        <div className="flex gap-2 ml-3">
          <button className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-sm">
            <i className="ri-phone-line text-sm"></i>
          </button>
          <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-sm">
            <i className="ri-chat-3-line text-sm"></i>
          </button>
          <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-sm">
            <i className="ri-whatsapp-line text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
