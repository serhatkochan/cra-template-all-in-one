import React from 'react';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import AppLayout from 'layouts/App';
import NotFoundPage from 'layouts/App/NotFoundPage';
import Main from 'pages/Main';

const AppRoutes = [
  {
    path: '',
    element: <AppLayout/>,
    children: [
      { path: '*', element: <NotFoundPage/> },
      { path: '/', index: true, element: <Main/> },
    ],
  },
];

const authMap = (routes) => routes.map((route) => {
  if (route.private) {
    route.element = <PrivateRoute>{route.element}</PrivateRoute>;
  } else {
    route.element = <PublicRoute>{route.element}</PublicRoute>;
  }
  if (route?.children) {
    route.children = authMap(route.children);
  }
  return route;
});

export default authMap(AppRoutes);
