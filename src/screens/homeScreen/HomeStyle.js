import { StyleSheet } from 'react-native';
import { colorMain } from '../../constant/Colors';
const Styles = StyleSheet.create({
    container: {
        backgroundColor: colorMain.whiteColor,
        flex: 1,

    }, containerInner: {
        // marginLeft: '6%',
        // marginRight: '6%',
    }, milesTextUpper: {
        // height: '40%',
        height: 100,
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        justifyContent: "center",
    },
    headMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        // height:60,
        // borderWidth:1
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
        color: colorMain.blackColor
    },
    milesTextMain: {
        // height: '40%',
        // borderWidth:1,
        // padding: 10,
        height: 350,
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 0,
        // justifyContent: "center",
        backgroundColor: colorMain.whiteColor
    }, uprMains: {
        borderRadius: 5,
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: colorMain.whiteColor,
        flexDirection: 'row',
        marginTop: '5%',
        alignItems: 'center'
    }, lwrBtn: {
        flexDirection: 'row',
        // borderWidth: 0.2,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    listhead: {
        fontSize: 14,
        color: colorMain.blackColor
    },
    listTwo: {
        fontSize: 12,
        color: colorMain.brownColor
    }, bottomtext: {
        fontSize: 12,
        color: colorMain.blackColor,
        fontWeight: 'bold'
    }, mainIcons: {
        alignItems: 'center',
        justifyContent: 'center'
    }, btmIcon: {
        width: 60, height: 42
    }, exploreMain: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }, belowMains: {
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center',
        backgroundColor: '#FFF0F4',
        justifyContent: 'space-between'
    }, belowOuterMain: {
        backgroundColor: '#FFF0F4',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10
    }, whereGoingmain: {
        justifyContent: 'center',
        paddingLeft: 10,
        height: 40
    }, wherGoingOuter: {
        borderWidth: 1,
        borderColor: '#CECECE',
        borderRadius: 5,
        height: 45,
        flexDirection: 'row',
        backgroundColor: colorMain.whiteColor,
        margin: 10,
        alignItems: 'center'
    }, currLocMain: {
        width: '80%',
        borderRadius: 10,
        justifyContent: 'center',
        height: 40,
    }, TopBtnMain: {
        marginRight: 10,
        height: 25,
        width: 1,
        backgroundColor: '#EAEAEA'
    }, menuIconMain: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
    }
});
export default Styles;
