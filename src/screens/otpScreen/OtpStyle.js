import { StyleSheet } from 'react-native';
import { colorMain } from '../../constant/Colors';
const Styles = StyleSheet.create({
    container: {
        backgroundColor: colorMain.pinkColor,
        flex: 1,

    }, containerInner: {
        marginLeft: '5%',
        marginRight: '5%',

    }, containerInnerTwo: {
        marginLeft: '5%',
        marginRight: '5%',
        flex: 1,
    },
    headMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%',
    },
    pinCodeText:{color:'black'},
    headingOne: {
        marginTop: 20,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: colorMain.whiteColor,
        alignSelf:'center'
    },
    headingTwo: {
        marginTop: 20,
        marginBottom: 5,
        fontSize: 14,
        
        color: colorMain.blackColor
    },
    headingMini: {
        fontSize: 14,
        color: colorMain.whiteColor,
        marginBottom: 20,
        alignSelf:'center'
    },
    remainText: {
        color: '#7D7D7D',
        fontSize: 14,
    },
    termText: {
        color: colorMain.blueColor,
        fontSize: 14,
        // textDecorationLine: 'underline',
        alignSelf:'center',
        marginTop:10,
        color:colorMain.pinkColor
    }, textBelow: {
        color: colorMain.blueColor,
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 25,
        textDecorationLine: 'underline'
    }
});
export default Styles;
