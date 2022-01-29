import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Style';




   const HomeScreen = () =>{
    return (
     
      <View>
      
     <Image style={styles.img} source={require('../../img/logo.png')}/>
     <View>
       <Text style={styles.logo}>DOLPHY</Text>
     </View> 
     <View>
       <Text style={styles.title}>Sign Up</Text>
     </View> 
     <View>
       <Text style={styles.p}>Make a Happy Deal Join Now</Text>
     </View> 
 
 
     <TouchableOpacity style={styles.s1}>
     <Icon name="facebook-f" size={20} color="white" style={styles.icon}/>
     <Text style={styles.intupTExt}>Continou With Facebook</Text>
     
     </TouchableOpacity>
 
 
 
     <TouchableOpacity style={styles.s2}>
     <Text style={styles.intupTExt2}>Continou With Phone</Text>
     </TouchableOpacity>
 
     <TouchableOpacity style={styles.s3}>
     <Icon name="twitter-square" size={25} color="#30559b" style={styles.icon}/>
     <Icon name="google-plus" size={25} color="#b5524f" style={styles.icon}/>
     <Icon name="linkedin" size={25} color="#143464" style={styles.icon}/>
     </TouchableOpacity>
 
 
     <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: '18%', alignSelf: 'center'}}>
       <Text style={styles.pl}>Make a Happy Deal Join Now</Text>
       <TouchableOpacity>
         <Text style={{color:'#5a61f1'}}>Login</Text>
       </TouchableOpacity>
     </View> 
 
     
   
     </View>
     
     );

   }
    


export default HomeScreen;
