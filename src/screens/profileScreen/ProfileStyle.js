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
    },
    imageMain: {
        width: 100,
        height: 100,
        borderRadius: 50,
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
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: '10%',
        paddingLeft: '10%',
        paddingRight: '10%',
        flex: 0.72,
    },
    forgotText: {
        fontSize: 14,
        color: colorMain.whiteColor,
        marginTop: '8%'
    },
    belowMain: {
        marginTop: '10%',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    textBelow: {
        color: colorMain.blueColor,
        fontSize: 16,
        marginTop: 10
    },
    headMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    roundHelp: {
        flexDirection: 'row',
        borderRadius: 20,
        borderColor: colorMain.blueColor,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headingOne: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 6
    }, modalView: {
        backgroundColor: '#fff',
        borderRadius: 20,
        // height: '35%',
        width: '80%',
        padding:10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    crossStyle: {
        alignSelf: 'flex-end',
        marginRight: 15,
        marginTop: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000095',
    },
});
export default Styles;
