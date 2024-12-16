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
    mapStyle:{ flex:1},
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
      offerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor:'#EB6586',
        padding: 3,
    },
    offerText: {
        color: 'white',
        marginLeft: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'white',
        margin:5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        flex:1,
        flexDirection: 'row',

    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        padding: 3
    },
    bookButton: {
        backgroundColor: 'pink',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    bookButtonText: {
        color: 'white',
        fontWeight: 'bold',
    }, btmIcon: {
        width: 55,
        height: 37,
        marginRight: 10
    },
    selectedItemContainer:{
        borderColor:'grey',
        borderWidth:1,
        padding:3,
        borderRadius:5,
    },
});
export default Styles;
