/**
 * @format
 */
import React from 'react';
import { SafeAreaView } from 'react-native';
import Counter from './src/screens/Counter';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Counter number={10} />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
