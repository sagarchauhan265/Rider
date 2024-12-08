import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
// import { Alert, TouchableOpacity } from "../../../node_modules/react-native/types/index";
import { colorMain } from "../../constant/Colors";
import { imageName } from "../../constant/Images";
import Styles from "./MenuStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreensName } from "../../constant/StringC";
import { removeItem } from "../../utility/AsyncStorage";

const MenuScreen = (props) => {



  useEffect(() => {
    // alert('dfdf');
  }, [])

  return (
    <View style={Styles.container}>
      <View>
        <Icon
          name={'close'}
          color={colorMain.blueColor}
          size={35}
          onPress={() => props.navigation.goBack()}
          style={Styles.iconStyle}
        />
      </View>
      <View style={Styles.containerInner}>
        <Text style={{ fontSize: 26, marginTop: 15, marginBottom: 20, fontWeight: 'bold' }}>Settings</Text>
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(ScreensName.profileScreen)}
            style={Styles.uprOne}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={imageName.appLogo} style={Styles.imageMain} />
              <View>
                <Text style={Styles.textMn}>{'Sam'}</Text>
                <Text style={Styles.textMnt}>{'1234567898'}</Text>
              </View>
            </View>
            <Icon
              name={'chevron-right'}
              color={colorMain.whiteColor}
              size={35}
            />
          </TouchableOpacity>
          <View style={Styles.btmOne}>
            <View style={Styles.uprOne}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                  name={'car'}
                  color={colorMain.whiteColor}
                  size={30}
                />
                <View>
                  <Text style={Styles.textMn}>{'My rides'}</Text>
                </View>
              </View>
              <Icon
                name={'chevron-right'}
                color={colorMain.whiteColor}
                size={35}
              />
            </View>
            <View style={{ height: 1, backgroundColor: colorMain.whiteColor }} />
            <View style={Styles.uprOne}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                  name={'cash-100'}
                  color={colorMain.whiteColor}
                  size={30}
                />
                <View>
                  <Text style={Styles.textMn}>{'My payments'}</Text>
                </View>
              </View>
              <Icon
                name={'chevron-right'}
                color={colorMain.whiteColor}
                size={35}
              />
            </View>
            <View style={{ height: 1, backgroundColor: colorMain.whiteColor }} />
            <View style={Styles.uprOne}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icons
                  name={'questioncircle'}
                  color={colorMain.whiteColor}
                  size={30}
                />
                <View>
                  <Text style={Styles.textMn}>{'About'}</Text>
                </View>
              </View>
              <Icon
                name={'chevron-right'}
                color={colorMain.whiteColor}
                size={35}
              />
            </View>
            <View style={{ height: 1, backgroundColor: colorMain.whiteColor }} />
            <TouchableOpacity style={Styles.uprOne} onPress={()=> removeItem('TOKEN')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icons
                  name={'infocirlce'}
                  color={colorMain.whiteColor}
                  size={30}
                />
                <View>
                  <Text style={Styles.textMn}>{'Logout'}</Text>
                </View>
              </View>
              <Icon
                name={'chevron-right'}
                color={colorMain.whiteColor}
                size={35}
              />
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </View>
  )
}

export default MenuScreen;

