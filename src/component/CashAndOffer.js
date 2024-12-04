// ButtonGroup.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CashAndOffer = ({ 
  button1Label = "Cash", 
  button2Label = "Offer", 
  button1Color = "red", 
  button2Color = "blue", 
  onButton1Press, 
  onButton2Press 
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: button1Color }]} 
        onPress={onButton1Press}
      >
        <Text style={styles.buttonText}>{button1Label}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: button2Color }]} 
        onPress={onButton2Press}
      >
        <Text style={styles.buttonText}>{button2Label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 2,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:2,
    elevation:5,
    margin:1,
    borderRadius:5
  },
  buttonText: {
    color: '#000', // Change text color for better visibility
  },
});

export default CashAndOffer;