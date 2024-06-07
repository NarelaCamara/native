import { Text, View } from 'react-native';

interface Props {
  estado: '';
}

const Counter = (props: Props) => {
  const { estadon } = props;
  return (
    <View>
      <Text>Hola Nare</Text>
    </View>
  );
};

export default Counter;
