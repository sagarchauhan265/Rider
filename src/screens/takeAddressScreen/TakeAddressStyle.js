import { StyleSheet } from 'react-native';
import { colorMain } from '../../constant/Colors';
const Styles = StyleSheet.create({
    container: {
        backgroundColor: colorMain.whiteColor,
        flex: 1,

    }, containerInner: {
        marginLeft: '4%',
        marginRight: '4%',
    },
    headMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        // marginBottom: 20,

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
        marginTop: 2,
        color: colorMain.blueColor,
        fontSize: 20,
        fontWeight: 'bold'
    }, flatListPick: {
        backgroundColor: "#fff",
        zIndex: 1000,
    },
    flatListMainTwo: {
        backgroundColor: "#fff",
        zIndex: 1000,
    },resultItem: {
        marginLeft: "4%",
        marginRight: "4%",
        marginTop:6
      },
    dropColor: {
        color: "#000",
    }, customLine: {
        height: 1,
        backgroundColor: "#d8d8d8",
        marginLeft: "4%",
        marginRight: "4%",
    },lwrBtn: {
        flexDirection: 'row',
        // borderWidth: 0.2,
        borderRadius: 5,
        padding: 5,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    }, listhead:{
        color:'black'
    }
    
});
export default Styles;