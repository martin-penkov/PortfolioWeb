import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/query/react-query';

import { Spinner, ErrorFallback } from '@/components/Elements';
// import { Notifications } from '@/components/Notifications/Notifications';

import { AppRoutes } from '@/routes';

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
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
          <QueryClientProvider client={queryClient}>
            {/* <Notifications /> */}
            {/* <AuthProvider> */}
              <Router>{children}</Router>
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