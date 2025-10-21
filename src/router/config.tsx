
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Profile from '../pages/profile/page';

const Home = lazy(() => import('../pages/home/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
const PlanParty = lazy(() => import('../pages/plan-party/page'));
const B2BInquiry = lazy(() => import('../pages/b2b-inquiry/page'));
const Orders = lazy(() => import('../pages/orders/page'));
const OrderDetails = lazy(() => import('../pages/orders/components/OrderDetails'));
const InquiryDetails = lazy(() => import('../pages/orders/components/InquiryDetails'));
const Venues = lazy(() => import('../pages/venues/page'));
const VenueDetails = lazy(() => import('../pages/venues/venue-details/page'));
const Offers = lazy(() => import('../pages/offers/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/plan-party',
    element: <PlanParty />,
  },
  {
    path: '/b2b-inquiry',
    element: <B2BInquiry />,
  },
  {
    path: '/orders',
    element: <Orders />,
  },
  {
    path: '/orders/details/:orderId',
    element: <OrderDetails />,
  },
  {
    path: '/orders/inquiry/:inquiryId',
    element: <InquiryDetails />,
  },
  {
    path: '/venues',
    element: <Venues />,
  },
  {
    path: '/venues/:venueId',
    element: <VenueDetails />,
  },
  {
    path: '/offers',
    element: <Offers />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
