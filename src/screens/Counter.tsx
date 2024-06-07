import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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

      <Button
        onPress={() => {
          setNum(num + 1);
        }}
        title="+1"
      ></Button>

      <Button
        onPress={() => {
          const rest = num - 1 <= 0 ? 0 : num - 1;
          setNum(rest);
        }}
        title="-1"
      ></Button>
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
});

export default Counter;
