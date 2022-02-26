import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Input } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';








export default function Login({navigation}){

 
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
    })
  }
  
  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }
  const image = {
  uri: 'https://gfx4arab.com/wp-content/uploads/2018/06/grunge-football-soccer-background_1048-7979.jpg',
};
  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
     
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
        <Input
          placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope'}}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
          returnKeyType="feito"
          />
        <Input
          placeholder="Sua senha"
          leftIcon={{ type: 'font-awesome', name: 'lock', size:35}}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
          returnKeyType="feito"
          />
        <Button
         icon={
          <Icon
            name="check"
            size={25}
            color="white"
            />
         }
         title="  Entrar"
         buttonStyle={specificStyle.button}
         onPress={() => entrar()}
        />

        <Button
         icon={
          <Icon
            name="user"
            size={25}
            color="white"
            />
         }
         title="  Cadastrar"
         buttonStyle={specificStyle.button}
         onPress={() => cadastrar()}
        /> 
        </ImageBackground>   
        </View>
      );
    }
const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#ccc"
  },
  button: {
    width: "100%",
    marginTop: 10
  }
})
      const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      borderColor: "#000",
      borderWidth: 3,
      borderStyle: "Solid"
    },
  });