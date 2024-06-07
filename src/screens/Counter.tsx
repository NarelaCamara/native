import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name?: string;
}

const Counter = ({ name }: Props) => {
  return (
    <View style={styleSheet.container}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styleSheet.title}>
        Hola {name}, como estas? Algun nuevo proyecto en el que estes
        trabajando?
      </Text>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});

export default Counter;
