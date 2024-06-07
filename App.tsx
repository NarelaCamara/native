/**
 * @format
 */
import React from 'react';
import { SafeAreaView } from 'react-native';
import Counter from './src/screens/Counter';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Counter number={10} />
    </SafeAreaView>
  );
}

export default App;
