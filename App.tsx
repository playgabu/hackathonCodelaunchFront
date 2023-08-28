import React from 'react';

import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Navigation from './src/Navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Navigation/>
    </SafeAreaView>
  );
}

export default App;
