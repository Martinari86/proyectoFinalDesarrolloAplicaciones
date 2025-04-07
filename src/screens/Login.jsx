import { Platform, StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { colors } from "../global/color";
import InputForm from '../Componentes/InputForm/InputForm';
import SubmitButton from '../Componentes/SubmitButton/SubmitButton';
import { useDispatch } from 'react-redux';
import { useSignInMutation } from '../services/authService';
import { setUser } from '../features/user/UserSlice';
import { useDB } from '../hooks/useDB';
import { pokestore } from "../../assets/logoPokeStore.png"

const Login = ({navigation}) => {

    const dispatch = useDispatch();
    const [triggerSignIn, result] = useSignInMutation()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {insertSession} = useDB()

    useEffect(()=> {
        if(result?.data && result.isSuccess){
        (async () =>{
            try{
              if(Platform.OS !== "web"){
                await insertSession({
                  email: result.data.email,
                  token: result.data.idToken,
                  localId: result.data.localId
                }) 
              }  
            dispatch(
                    setUser({
                      email: result.data.email,
                      token: result.data.idToken,
                      localId: result.data.locaId
                    })
                  )    
            }catch(error){
                console.log(error);
            }
        })()  
      }
    }, [result])


    const onSubmit = () => {
    triggerSignIn({ email, password });
    };

    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a la POKESTORE</Text>
          <InputForm 
            label={"E-mail"} 
            onChange={setEmail} 
            error={""} 
          />
          <InputForm
            label={"Pokeseña"}
            onChange={setPassword}
            error={""}
            isSecure={true}
          />
          <SubmitButton onPress={onSubmit} title="Ingresa YA !!" />
          <Text style={styles.sub}>Nuevo Entrenador?</Text>
          <Pressable style={styles.boton} onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.subLink}>Registrate YA !!</Text>
          </Pressable>
        </View>
      </View>
    );
}

export default Login

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "Josefin",
    color: "blue",
    fontWeight: "bold"
  },
  sub: {
    fontSize: 14,
    color: "blue",
    fontWeight: "bold"
  },
  subLink: {
    fontSize: 14,
    color: colors.primary,
    textAlign: "center"
  },
  boton: {
    backgroundColor: "blue",
    width: "25%",
    fontWeight: "bold",
    borderRadius: 10,
  }

});