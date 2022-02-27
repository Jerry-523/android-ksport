import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const image = {
  uri: 'https://media.istockphoto.com/vectors/soccer-background-in-light-blue-colors-vector-id1135383732?k=20&m=1135383732&s=170667a&w=0&h=FFsaT1n-p70t1-sp5ULMEtvSD3k48YnuIYOeAI3Fm0I=',
};

export default class Home extends Component{
  render(){
    return(
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      </ImageBackground>
    </View>
  );


}
  }   
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 3,
    borderStyle: 'solid',
  },
  
}
);


