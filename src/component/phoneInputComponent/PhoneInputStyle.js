import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: 'row',
    justifyContent:'space-between',
    height: 50,
    borderRadius: 5,
    marginTop: '2%',
    width: '100%'
  },
  cmpmain: {
    margin: 10,
    borderRadius: 10,
    marginLeft: '5%',
    marginRight: '5%',
  },
  inptStyle: {
    flex: 1,
    paddingLeft: 8,
    paddingRight:5,
    alignItems:'center',
    flexDirection:'row',
    fontSize: 13,
    fontFamily: 'Metropolis-Bold',
    color: '#000',
    width:'70%',
    borderRadius: 10,
    backgroundColor: '#F6F6F6'
  },

  iconstyleleft: {
    backgroundColor: '#F6F6F6',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    width:'20%',
    borderRadius: 10,
    marginRight:15
  },
  errortext: {
    color: 'red',
    // fontFamily: 'Poppins-Regular',
  }, ftttext: {
    color: '#000',
    // fontFamily: 'Poppins-Regular',
  },

});

export default styles;
