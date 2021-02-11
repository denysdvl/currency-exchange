import React from 'react';
import { MainLayout } from './src/navigation/MainLayout';
import { ServiceState } from './src/context/currency-service/ServiceState';

const App = () => {

  return(
    <ServiceState>
      <MainLayout></MainLayout>
    </ServiceState>
     );
};

export default App;