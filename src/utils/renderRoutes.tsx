import React, { ReactNode } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ReactComponentLike } from 'prop-types';

import ProtectedRoute from './ProtectedRoute';

type PathConfig = {
  path?: string;
  key?: string;
  exact?: boolean;
  protected?: boolean;
  redirects?: RedirectPath[];
  component?: ReactComponentLike;
  routes?: PathConfig[];
};

type RedirectPath = {
  path: string;
  to: string;
  exact?: boolean;
  condition?: { (...args: any[]): boolean };
};

const renderRoutes = (config: PathConfig, props: any) => {
  if (!config.component) return null;
  return (
    <config.component {...props}>
      {config.routes ? (
        <Switch>
          {config.routes.map((route, i) => {
            const PathRoute = route.protected ? ProtectedRoute : Route;
            return (
              <PathRoute
                key={route.key || `route__key__${i}`}
                path={route.path}
                exact={route.exact}
                render={props => {
                  return renderRoutes(route, props);
                }}
              />
            );
          })}
        </Switch>
      ) : null}
    </config.component>
  );
};

const redirectRoutes = (redirects: RedirectPath[]) => {
  return redirects.map(({ exact, path, to, condition }, i) => {
    if (condition && !condition()) return null;
    return (
      <Route
        exact={exact}
        path={path}
        key={`redirect__route__${i}`}
        render={() => <Redirect to={to} />}
      />
    );
  });
};

export default (routeConfig: PathConfig): ReactNode => {
  if (routeConfig.redirects && routeConfig.redirects.length > 0) {
    const children = [
      redirectRoutes(routeConfig.redirects),
      renderRoutes(routeConfig, { key: 'parent__route__key' }),
    ];
    return <Switch {...{ children }} />;
  }
  return renderRoutes(routeConfig, null);
};
