import React, { Suspense, lazy } from 'react';
import Loader from 'components/Loader';

const Routes = lazy(() => import('./routes'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes/>
    </Suspense>
  );
}

export default App;
