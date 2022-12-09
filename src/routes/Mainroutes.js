import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Allfoods from '../pages/Allfoods';
// import AboutUs from '../pages/AboutUs';
// import Checkout from '../pages/Checkout';
// import NewsPage from '../pages/NewsPage';
// import NotFound from '../pages/NotFound';
// import Forms from '../pages/Forms';
// import  ViewDetails  from '../pages/ViewDetails';
// import Products from './Products';
// import ProductDetail from './ProductDetail';
// import Restaurants from '../pages/Restaurants';
const AuthenticationRoutes = () => [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/allmeals',
    element: <Allfoods />,
  },
  
  // {
  //   path: '/form',
  //   element: <Forms />,
  // },
 
  // {
  //   path: '/news',
  //   element: <NewsPage/>,
  // },
  // {
  //   path: '/about',
  //   element: <AboutUs/>,
  // },
  // {
  //   path:'/products',
  //   element:<Products />
  // },
  // {
  //   path:'/restorants',
  //   element:<Restaurants />
  // },
  // {
  //   path:'/news/:id',
  //   element:<ViewDetails/>
  // },
  // {
  //   path:'/products/:productId',
  //   element:<ProductDetail />
  // },
  // {
  //   path:'/news/:id',
  //   element:<ViewDetails/>
  // }
  // ,
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
];

export default AuthenticationRoutes;