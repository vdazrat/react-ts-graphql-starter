import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const renderRoutes = (config, props) => {
    if (!config.component) return null;
    return (
        <config.component {...props}>
            <Switch>
                {config.routes
                    ? config.routes.map((route, i) => {
                        return (
                            <Route
                                key={route.key || `route__key__${i}`}
                                path={route.path}
                                exact={route.exact}
                                render={props => {
                                    return renderRoutes(route, props);
                                }}
                            />
                        );
                    })
                    : null}
            </Switch>
        </config.component>
    );
};

const redirectRoutes = redirects => {
    return redirects.map(({ exact, path, to }, i) => (
        <Route
            exact={exact}
            path={path}
            key={`redirect__route__${i}`}
            render={() => <Redirect to={to} />}
        />
    ));
};

export default routeConfig => {
    if (routeConfig.redirects && routeConfig.redirects.length > 0) {
        const children = [
            redirectRoutes(routeConfig.redirects),
            renderRoutes(routeConfig, { key: 'parent__route__key' }),
        ];
        return <Switch {...{ children }} />;
    }
    return renderRoutes(routeConfig, null);
};
