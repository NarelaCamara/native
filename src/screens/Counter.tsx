import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const Counter = (props: Props) => {
  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.title}>Hola Nare</Text>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});

export default Counter;
