import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components';

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

      <PrimaryButton
        onPress={() => {
          const rest = num - 1 <= 0 ? 0 : num - 1;
          setNum(rest);
        }}
        onLongPress={() => setNum(0)}
        text="Decrementar -1"
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
});

export default Counter;
