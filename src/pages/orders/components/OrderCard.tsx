
interface OrderCardProps {
  order: any;
  type: 'upcoming' | 'past' | 'corporate';
  onClick: () => void;
}

export default function OrderCard({ order, type, onClick }: OrderCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'completed':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'cancelled':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'supervisor assigned':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'in review':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'submitted':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  if (type === 'corporate') {
    return (
      <div
        onClick={onClick}
        className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all active:scale-98 cursor-pointer border border-gray-100"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">Inquiry ID</p>
            <p className="text-sm font-bold text-gray-900">{order.id}</p>
          </div>
          <span className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
        </div>

        <div className="space-y-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl">
              <i className="ri-building-fill text-orange-500 text-sm"></i>
            </div>
            <span className="text-sm font-semibold text-gray-900">{order.type}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
              <i className="ri-group-fill text-pink-500 text-sm"></i>
            </div>
            <span className="text-sm text-gray-600">{order.guestCount} Guests</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
              <i className="ri-calendar-fill text-purple-500 text-sm"></i>
            </div>
            <span className="text-sm text-gray-600">Submitted: {order.submissionDate}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl">
              <i className="ri-building-2-fill text-blue-500 text-sm"></i>
            </div>
            <span className="text-sm text-gray-600">{order.companyName}</span>
          </div>
        </div>

        {order.supervisor && (
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-4 mb-4 border border-orange-100">
            <div className="flex items-center gap-3">
              <img
                src={order.supervisor.photo}
                alt={order.supervisor.name}
                className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-sm"
              />
              <div>
                <p className="text-xs text-orange-600 font-medium">Supervisor Assigned</p>
                <p className="text-sm font-semibold text-gray-900">{order.supervisor.name}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-end">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-xl">
            <i className="ri-arrow-right-s-line text-gray-400 text-lg"></i>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all active:scale-98 cursor-pointer border border-gray-100"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-medium text-gray-500 mb-1">Order ID</p>
          <p className="text-sm font-bold text-gray-900">{order.id}</p>
        </div>
        <span className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${getStatusColor(order.status)}`}>
          {order.status}
        </span>
      </div>

      <div className="space-y-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl">
            <i className="ri-cake-3-fill text-orange-500 text-sm"></i>
          </div>
          <span className="text-sm font-semibold text-gray-900">{order.type}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
            <i className="ri-calendar-fill text-pink-500 text-sm"></i>
          </div>
          <span className="text-sm text-gray-600">{order.date} • {order.time}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
            <i className="ri-group-fill text-purple-500 text-sm"></i>
          </div>
          <span className="text-sm text-gray-600">{order.guestCount} Guests</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl">
            <i className="ri-map-pin-fill text-blue-500 text-sm"></i>
          </div>
          <span className="text-sm text-gray-600 truncate">{order.venue}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500 mb-1">Total Amount</p>
          <p className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            ₹{(order.totalPrice || 0).toLocaleString()}
          </p>
        </div>
        <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-xl">
          <i className="ri-arrow-right-s-line text-gray-400 text-lg"></i>
        </div>
      </div>
    </div>
  );
}
