import { StyleSheet } from 'react-native';
import { colorMain } from '../../constant/Colors';
const Styles = StyleSheet.create({
    container: {
        backgroundColor: colorMain.whiteColor,
        flex: 1,

    }, imageMain: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colorMain.whiteColor
    },
    roundHelp: {
        height: 40,
        borderWidth: 0.5,
        flexDirection: 'row',
        width: 90,
        borderRadius: 20,
        borderColor: colorMain.blueColor,
        alignItems: 'center',
        justifyContent: 'space-around'
    }, headingOne: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }, termText: {
        color: colorMain.blueColor,
        fontSize: 14,
        textDecorationLine: 'underline'
    }, textBelow: {
        color: colorMain.blueColor,
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 25,
        textDecorationLine: 'underline'
    }, iconStyle: {
        marginTop: 20,
        marginLeft: 20
    }, textMains: {
        color: colorMain.whiteColor
    }, imageMain: {
        width: 150,
        height: 150,
        borderRadius: 20,
        borderWidth: 2,
        alignSelf: 'center',
        borderColor: colorMain.blueColor,
        marginTop: 10,
        marginBottom: 10
    },
    milesTextMain: {
        padding: 10,
        backgroundColor: colorMain.whiteColor,
        flex: 0.7
    },btmIcon: {
        width: 55, 
        height: 37,
        marginRight:10
    },
    map: {
        flex: 0.5,
        width: '100%',
      },
      markerImage: {
        height: 16,
        width: 16,
      },
});
export default Styles;
