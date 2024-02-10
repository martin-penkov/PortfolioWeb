import { useRoutes } from 'react-router-dom';

import { Landing } from '@/features/misc';
import { defaultRoutes } from './defaultRoutes';

export const AppRoutes = () => {

  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const routes = defaultRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
