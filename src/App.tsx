import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/query/react-query';

import { Spinner, ErrorFallback } from '@/components/Elements';
import { Notifications } from '@/components/Notifications/Notifications';

import { AppRoutes } from '@/routes';
import { Provider } from 'react-redux';
import { Background } from './components/Background/Background';
import { DeviceFrame } from './components/Background/DeviceFrame';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

const AppProvider = ({ children }: AppProviderProps) => {
  console.info("Environment: " + process.env.NODE_ENV);
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
          <QueryClientProvider client={queryClient}>
            <Background />
              <Notifications />
            {/* <AuthProvider> */}
            <DeviceFrame>
              <Router>{children}</Router>
            </DeviceFrame>
            {/* </AuthProvider> */}
          </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export default App;