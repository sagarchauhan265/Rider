
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../navigation/CustomDrawer';
import HomeStack from './HomeStack';
import { ScreensName } from '../constant/StringC';
import SetttingStack from './SetttingStack';
import MenuScreen from '../screens/menuScreen/MenuScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import TakeAddressScreen from '../screens/takeAddressScreen/TakeAddressScreen';
import MainMapScreen from '../screens/mainMapScreen/MainMapScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name={ScreensName.homeStack} component={HomeStack} />
            <Drawer.Screen name={ScreensName.menuScreen} component={MenuScreen} />
            <Drawer.Screen name={ScreensName.profileScreen} component={ProfileScreen} />
            <Drawer.Screen name={ScreensName.takeAddressScreen} component={TakeAddressScreen} />
            <Drawer.Screen name={ScreensName.mainMapScreen} component={MainMapScreen} />
          
            <Drawer.Screen name={ScreensName.settingStack} component={SetttingStack} />
        </Drawer.Navigator>

    );
};

export default DrawerNavigation;
