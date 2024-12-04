import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButtonGroup = ({ options, label, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option); // Call the onSelect function passed from props
  };

  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.radioGroup}>
        {options.map((option) => (
          <TouchableOpacity 
            key={option.value} 
            style={styles.radioButton} 
            onPress={() => handleSelect(option.value)}
          >
            <View style={[
              styles.radioCircle, 
              selectedOption === option.value && styles.selectedRadio
            ]} />
            <Text style={styles.label}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    marginVertical: 10,
  
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color:'#000'
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRadio: {
    backgroundColor: '#eb6587',
  },
});

export default RadioButtonGroup;