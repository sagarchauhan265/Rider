import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from './PhoneInputStyle';
import Icon from 'react-native-vector-icons/Entypo';
import LeftIcon from 'react-native-vector-icons/AntDesign';
import LeftIconDot from 'react-native-vector-icons/MaterialIcons';
import { colorMain } from '../../constant/Colors';
import { imageName } from '../../constant/Images';

const PhoneInputComponent = props => {
  return (
    <View>
      <View style={styles.mainStyle}>
        <View style={styles.iconstyleleft}>
          <Image source={imageName.flag} />
          <LeftIcon
            name={'caretdown'}
            size={12}
            color={colorMain.blackColor}
          />
        </View>
        <View style={styles.inptStyle}>
          <Text style={styles.ftttext}>+91</Text>
          <TextInput
          style={{ flex: 1}}
            onChange={props.onChange}
            placeholderTextColor="#000000"
            color='#000000'
            name={props.fieldname}
            placeholder={''}
            onChangeText={props.onChngText}
            value={props.vval}
           // secureTextEntry={props.txtentry}
            keyboardType={props.keyboardType}
            editable={props.editable}
            autoCapitalize="none"
            maxLength={props.maxLength}
          />
        </View>
      </View>
      <View>
        <Text style={styles.errortext}>{props.validd}</Text>
      </View>
    </View>
  );
};

export default PhoneInputComponent;
