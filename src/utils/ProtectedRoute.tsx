import React, { FC } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { isAuthenticated } from './auth';

// Currently only supports render in protected route
const ProtectedRoute: FC<RouteProps> = ({ render, ...rest }) => {
  const protectedRender = render
    ? (props: any) => {
        if (!isAuthenticated()) {
          return (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          );
        }

        return render(props);
      }
    : render;

  return <Route {...rest} render={protectedRender} />;
};

export default ProtectedRoute;
