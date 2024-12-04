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
        marginBottom: '10%'
    },
    imageMain: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: '5%'
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
        flex: 0.3
    },
    innerTwo: {
        backgroundColor: colorMain.pinkColor,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: '10%',
        paddingLeft: '10%',
        paddingRight: '10%',
        flex: 0.7,

    }, forgotText: {
        fontSize: 14,
        color: colorMain.whiteColor,
        marginTop: '8%'
    }, belowMain: {
        marginTop: '10%',
        flexDirection: 'row',
        alignSelf: 'center'
    },textBelow:{
      color: colorMain.whiteColor,
      fontSize:16,
    }
});
export default Styles;
