import React from 'react';
import {StyleSheet} from 'react-native';
;

const styles = StyleSheet.create({
    img: {
      alignSelf: 'center',
      marginTop: 150,
      width: 150,
      height: 100,
      alignItems: 'center'
    },
    logo : {
      color: '#2f549b',
      alignSelf: 'center',
      fontWeight: '700',
      fontSize: 30,
      marginTop: -5

    },
    title : {
      color: '#251d1d',
      alignSelf: 'center',
      fontWeight: '700',
      fontFamily: 'Poppins-Bold',
      fontSize: 40,
      marginTop: 50
    },
    p: {
      color: 'gray',
      alignSelf: 'center',

    },
    s1: {
      flexDirection: 'row',
      marginTop: 10,
      backgroundColor: '#5a61f1',
      justifyContent: 'center',
      width: '70%',
      height: 40,
      alignSelf: 'center',
      borderRadius: 50,
      paddingHorizontal: '9%'
    },
    s2: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      borderWidth: 1,
      width: '70%',
      height: 40,
      alignSelf: 'center',
      borderRadius: 50
    },
    icon: {
      margin: 10,
      alignSelf:'center'
    },
    intupTExt:{
      margin: 10,
      
      
    },
    intupTExt2:{
      margin: 10,
      color: 'black'
    },
    s3: {
      marginTop: 20,
      alignSelf: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '40%',
      marginTop: 50
    },
    pl:{
      color: 'gray',
      alignSelf: 'center',
    }
  
})
export default styles;
