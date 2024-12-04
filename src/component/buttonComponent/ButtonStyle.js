import {StyleSheet} from 'react-native';
import { colorMain } from '../../constant/Colors';
const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    backgroundColor: colorMain.pinkColor,
  },
  textContainer: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    fontWeight:'bold',
    letterSpacing: 1,
  },
  iconStyle: {
    alignItems: 'center',
  },
});

export default styles;
