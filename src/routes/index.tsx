import renderRoutes from 'utils/renderRoutes';
import App from 'components/App';

import main from './main/route';
import notFound from './default/route';

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
