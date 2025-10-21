
import { useState } from 'react';
import { Review } from '../../types';

interface CustomerReviewsProps {
  venueId: string;
  rating: number;
  reviewCount: number;
}

export default function CustomerReviews({ venueId, rating, reviewCount }: CustomerReviewsProps) {
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Mock reviews data
  const reviews: Review[] = [
    {
      id: '1',
      userName: 'Priya Sharma',
      rating: 5,
      comment: 'Absolutely stunning venue! The staff was incredibly helpful and the ambiance was perfect for our wedding. Highly recommend!',
      date: '2024-01-15',
      eventType: 'Wedding'
    },
    {
      id: '2',
      userName: 'Rajesh Kumar',
      rating: 4,
      comment: 'Great location and facilities. The catering was excellent and the venue was well-maintained. Will definitely book again.',
      date: '2024-01-10',
      eventType: 'Corporate'
    },
    {
      id: '3',
      userName: 'Anita Reddy',
      rating: 5,
      comment: 'Perfect for our anniversary celebration. Beautiful decor and amazing service. The team went above and beyond!',
      date: '2024-01-05',
      eventType: 'Anniversary'
    },
    {
      id: '4',
      userName: 'Vikram Singh',
      rating: 4,
      comment: 'Good venue with nice amenities. The parking was convenient and the sound system was excellent for our event.',
      date: '2023-12-28',
      eventType: 'Birthday'
    }
  ];

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 2);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`${
          index < rating ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'
        } text-sm`}
      />
    ));
  };

  const getRatingDistribution = () => {
    return [
      { stars: 5, percentage: 65 },
      { stars: 4, percentage: 25 },
      { stars: 3, percentage: 8 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 0 }
    ];
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Customer Reviews</h3>
      
      {/* Rating Summary */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{rating}</div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {renderStars(Math.floor(rating))}
            </div>
            <div className="text-xs text-gray-600">{reviewCount} reviews</div>
          </div>
          <div className="flex-1">
            {getRatingDistribution().map((item) => (
              <div key={item.stars} className="flex items-center gap-2 mb-1">
                <span className="text-xs text-gray-600 w-6">{item.stars}★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600 w-8">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {displayedReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {review.userName.charAt(0)}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900">{review.userName}</span>
                  <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-full">
                    {review.eventType}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {reviews.length > 2 && (
        <button
          onClick={() => setShowAllReviews(!showAllReviews)}
          className="w-full mt-4 py-3 text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors"
        >
          {showAllReviews ? 'Show Less Reviews' : `Show All ${reviews.length} Reviews`}
        </button>
      )}
    </div>
  );
}
