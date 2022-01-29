
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Style';
import Home from './Home';
;



function App() {
  return(
    <>
    <ScrollView  style={{flex: 1 , backgroundColor: '#ffffff'}}>
    <Home />
    </ScrollView>
   
    </>
  )
  
  }



export default App;