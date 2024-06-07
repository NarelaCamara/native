/**
 * @format
 */
import React from 'react';
import { SafeAreaView } from 'react-native';
import Counter from './src/screens/Counter';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Counter name={'Narela'} />
    </SafeAreaView>
  );
}

export default App;
