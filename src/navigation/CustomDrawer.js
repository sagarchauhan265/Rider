import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colorMain } from '../constant/Colors';
import { ScreensName } from '../constant/StringC';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawer = ({ navigation, props }) => {
  return (
    <View style={styles.container}>
      <View>
        <Icon
          name={'window-close'}
          color={colorMain.blueColor}
          size={25}
          onPress={() => navigation.closeDrawer()}
        // style={Styles.iconStyle}
        />
      </View>
      <Text style={styles.header}>Custom Drawer</Text>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate(ScreensName.homeStack)}
      >
        <Text style={styles.itemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate(ScreensName.settingStack)}
      >
        <Text style={styles.itemText}>Settings</Text>
      </TouchableOpacity>
      {/* Add more items as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    paddingVertical: 15,
  },
  itemText: {
    fontSize: 18,
  },
});

export default CustomDrawer;