import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Styles from './HeaderStyle';
import {ImageGallery, imageName} from '../../Constant/Images';

const Header = props => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity>
        <Image style={Styles.logoo} source={imageName.appLogo} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
