import React from 'react';
import { MainLayout } from './src/navigation/MainLayout';
import { ServiceState } from './src/context/currency-service/ServiceState';
import { CurrencyState } from './src/context/currency/CurrencyState';

const App = () => {

  return(
    <ServiceState>
      <CurrencyState>
        <MainLayout></MainLayout>
      </CurrencyState>
    </ServiceState>
     );
};

export default App;