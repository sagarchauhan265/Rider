import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './TextInputStyle';
import Icon from 'react-native-vector-icons/Entypo';
import LeftIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LeftIconDot from 'react-native-vector-icons/MaterialIcons';
import { colorMain } from '../../constant/Colors';

const TextInputComponent = props => {
  return (
    <View>
      <View style={styles.mainStyle}>
        {/* {props.leftIconName && (
          <LeftIcon
            style={styles.iconstyleleft}
            name={props.leftIconName}
            size={25}
            color={colorMain.blueColor}
          />
        )}
        {props.leftGreenPin && (
          <LeftIconDot
            style={styles.iconstyleleft}
            name={props.leftGreenPin}
            size={25}
            color={'green'}
          />
        )}
        {props.leftRedPin && (
          <LeftIconDot
            style={styles.iconstyleleft}
            name={props.leftRedPin}
            size={25}
            color={'red'}
          />
        )} */}
        <TextInput
          onChange={props.onChange}
          style={styles.inptStyle}
          placeholderTextColor="#000"
          name={props.fieldname}
          placeholder={props.placename}
          onChangeText={props.onChngText}
          value={props.vval}
          secureTextEntry={props.txtentry}
          keyboardType={props.keyboardType}
          editable={props.editable}
          autoCapitalize="none"
          maxLength={props.maxLength}
        />
        {/* <Icon
          style={styles.iconstyle}
          name={props.rightIconName}
          size={props.iconSize}
          onPress={props.iconClick}
          color={'#000'}
        /> */}
      </View>
      <View>
        <Text style={styles.errortext}>{props.validd}</Text>
      </View>
    </View>
  );
};

export default TextInputComponent;
