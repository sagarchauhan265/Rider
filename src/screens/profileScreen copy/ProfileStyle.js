import { StyleSheet } from 'react-native';
import { colorMain } from '../../constant/Colors';
const Styles = StyleSheet.create({
    container: {
        backgroundColor: colorMain.whiteColor,
        flex: 1,
    },
    mainHead: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
        // marginBottom: '10%'
    },
    imageMain: {
        width: 100,
        height: 100,
        borderRadius: 50,
        // marginTop: '5%'
    },
    imageMiddle: {
        width: 300,
        height: '60%',
        borderRadius: 20,
        marginTop: '5%',
    },
    innerOne: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.28
    },
    innerTwo: {
        // backgroundColor: colorMain.pinkColor,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: '10%',
        paddingLeft: '10%',
        paddingRight: '10%',
        flex: 0.72,

    }, forgotText: {
        fontSize: 14,
        color: colorMain.whiteColor,
        marginTop: '8%'
    }, belowMain: {
        marginTop: '10%',
        flexDirection: 'row',
        alignSelf: 'center'
    }, textBelow: {
        color: colorMain.blueColor,
        fontSize: 16,
        marginTop:10
    }, headMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
        // marginBottom: 20,

    },
    roundHelp: {
        // height: 40,
        // borderWidth: 0.5,
        flexDirection: 'row',
        // width: 90,
        borderRadius: 20,
        borderColor: colorMain.blueColor,
        alignItems: 'center',
        justifyContent: 'space-around'
    }, headingOne: {
        // marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft:6
    },
});
export default Styles;
