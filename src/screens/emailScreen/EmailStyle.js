import { StyleSheet } from 'react-native';
import { colorMain } from '../../constant/Colors';
const Styles = StyleSheet.create({
    container: {
        backgroundColor: colorMain.whiteColor,
        flex: 1,

    }, containerInner: {
        marginLeft: '6%',
        marginRight: '6%',
    },
    headMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        // height:60,
        // borderWidth:1
    },
    imageMain: {
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
    },textBelow:{
        color: colorMain.blueColor,
        fontSize:16,
        alignSelf:'center',
        marginTop:25,
        textDecorationLine:'underline'
      }
});
export default Styles;
