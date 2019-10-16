import renderRoutes from 'utils/renderRoutes';
import App from 'components/App';

import main from './main';
import notFound from './default';

const routeConfigs = {
  redirects: [
    {
      path: '/',
      to: '/main',
      exact: true,
    },
  ],
  component: App,
  routes: [main, notFound],
};

export default () => {
  return renderRoutes(routeConfigs);
};
