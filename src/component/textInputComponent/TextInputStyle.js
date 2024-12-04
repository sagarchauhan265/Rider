import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 5,
    // marginTop: '2%',
    borderColor: '#000',
    borderWidth: 1,
   
  },
  cmpmain: {
    margin: 10,
    borderRadius: 10,
    // marginLeft: '5%',
    // marginRight: '5%',
  },
  inptStyle: {
    // flex: 1,
    paddingLeft: 15,
    // width: '95%',
    fontWeight:'400',
    fontSize: 13,
    fontFamily: 'Metropolis-Bold',
    color: '#000',
  },
  iconstyle: {
    alignSelf: 'center',
    // marginRight: 20,
  },
  iconstyleleft: {
    justifyContent: 'center',
    alignSelf: 'center',
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  errortext: {
    color: 'red',
    // fontFamily: 'Poppins-Regular',
  },
 
});

export default styles;
