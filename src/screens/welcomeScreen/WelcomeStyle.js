import { StyleSheet } from 'react-native';
import { colorMain } from '../../constant/Colors';
const Styles = StyleSheet.create({
    container: {
        backgroundColor: colorMain.pinkColor,
        flex: 1,

    }, containerInner: {
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '10%',
    },
    imageMain: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: '10%',


    },
    imageMiddle: {
        width: 300,
        height: '60%',
        borderRadius: 20,
        marginTop: '10%',
        marginBottom: '10%',
    }
});
export default Styles;
