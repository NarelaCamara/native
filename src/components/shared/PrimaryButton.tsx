import React from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  onLongPress?: () => void;
  onPress?: () => void;
  text: string;
}

export const PrimaryButton = ({ onLongPress, onPress, text }: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      style={({ pressed }) => [
        styleSheet.button,
        pressed && styleSheet.buttonPressed,
      ]}
      onLongPress={() => onLongPress && onLongPress()}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};

const styleSheet = StyleSheet.create({
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
});
