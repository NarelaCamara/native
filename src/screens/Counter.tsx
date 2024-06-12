import { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components';
import { Button, FAB } from 'react-native-paper';

interface Props {
  number: number;
}

const Counter = ({ number }: Props) => {
  const [num, setNum] = useState(number);
  return (
    <View style={styleSheet.container}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styleSheet.title}>
        {num}
      </Text>

      <PrimaryButton
        onPress={() => {
          setNum(num + 1);
        }}
        onLongPress={() => setNum(0)}
        text="Incrementar +1"
      />

      <Button
        mode="contained"
        onPress={() => {
          const rest = num - 1 <= 0 ? 0 : num - 1;
          setNum(rest);
        }}
        onLongPress={() => setNum(0)}
      >
        Decrementar -1
      </Button>

      <FAB
        icon="add"
        style={styleSheet.fab}
        onPress={() => {
          setNum(num + 1);
        }}
        onLongPress={() => setNum(0)}
      />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    color: 'black',
    fontWeight: '300',
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#56d661' : '#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonPressed: {
    backgroundColor: '#4746AB',
  },
  text: {
    color: 'white',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: Platform.OS === 'android' ? 10 : 0,
  },
});

export default Counter;
