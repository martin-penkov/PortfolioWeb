import { Outlet, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { Suspense } from 'react';
import { Spinner } from '@/components/Elements';
import { AboutMe } from '@/components/Apps/AboutMe';

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <Suspense
          fallback={
            <div className="h-full w-full flex items-center justify-center">
              <Spinner size="xl" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
        </MainLayout>
      } />
      <Route path='projects' element={<AboutMe />} />
    </Routes>
  )
};
