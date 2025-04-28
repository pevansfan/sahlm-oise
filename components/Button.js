import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Composant Button personnalisé
const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#41A62A',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },

  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Manrope',
    letterSpacing: .5,
  },
});

export default CustomButton;
