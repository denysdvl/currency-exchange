import React, {useState, useEffect} from 'react';
import { MainLayout } from './src/navigation/MainLayout';
import { ServiceState } from './src/context/currency-service/ServiceState';
import { CurrencyState } from './src/context/currency/CurrencyState';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setIsReady(true);
    })();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return(
    <ServiceState>
      <CurrencyState>
        <MainLayout></MainLayout>
      </CurrencyState>
    </ServiceState>
     );
};

export default App;