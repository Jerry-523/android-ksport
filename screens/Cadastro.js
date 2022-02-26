import React, {useState} from "react";
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Input, CheckBox } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';






export default function Cadastro({navigation}){

 
  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [telemovel, setTelemovel] = useState(null)
  const [passeword, setPasseword] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorTelemovel, setErrorTelemovel] = useState(null)
  const [errorPasseword, setErrorPasseword] = useState(null)


  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorTelemovel(null)
    if (email == null){
      setErrorEmail("Prencher seu e-mail correctamente")
      error = true
    }
    if (telemovel == null){
      setErrorTelemovel("numero incorrecta")
      error = true
    }
  return !error
  }


  const salvar = ( ) => {
    if(validar()){
      console.log("salvou")
  }}

  return (
    <KeyboardAvoidingView 
    style={[styles.container, specificStyle.specificContainer]}>
     
        
        <Input
          placeholder="E-mail:"
          onChangeText={value => {
            setEmail(value)
            setErrorEmail(null)
          }}
          keyboardType="email-address"
          errorMessage={errorEmail}
        />
        
        <Input
          placeholder="Nome:"
          onChangeText={value => setNome(value)}
          errorMessage={errorNome}
        />

        <Input
          placeholder="Telemovel:"
          onChangeText={value => {
            setTelemovel(value)
            setErrorTelemovel(null)
          }}
          keyboardType="phone-pad"
          errorMessage={errorTelemovel}
          />

        <Input
          placeholder="Passeword:"
          onChangeText={value => setPasseword(value)}
          secureTextEntry={true}
          returnKeyType="feito"
          errorMessage={errorPasseword}
          />

        <CheckBox 
            title="Eu aceito os termos de uso e politica de privacidade..."
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="green"
            uncheckedColor="red"
            checked={isSelected}
            onPress={() => setSelected(!isSelected)}
        />

        <Button
         icon={
          <Icon
            name="check"
            size={25}
            color="white"
            />
         }
         title="  Salvar"
         buttonStyle={specificStyle.button}
         onPress={() => salvar()}
        />   
        </KeyboardAvoidingView>
      );
    }
const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff"
  },
  button: {
    width: "100%",
    marginTop: 10
  }
})
     