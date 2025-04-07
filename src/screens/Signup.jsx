import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import InputForm from '../Componentes/InputForm/InputForm';
import SubmitButton from '../Componentes/SubmitButton/SubmitButton';
import { colors } from '../global/color';

import { useDispatch } from 'react-redux';
import { useSignUpMutation } from '../services/authService';
import { setUser } from '../features/user/UserSlice';



const Signup = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMail, setErrorMail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
  
    const dispatch = useDispatch();

    const [triggerSignUp, result] = useSignUpMutation()

    useEffect(()=> {
        if(result?.data && result.isSuccess){
        (async () =>{
            try{
                const response = await insertSession({
                    email: result.data.email,
                    token: result.data.idToken,
                    localId: result.data.localId
                })
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
        try {
            setErrorMail('')
            setErrorPassword('')
            setErrorConfirmPassword('')
            triggerSignUp({email, password, returnSecureToken: true})
        }catch (err) {
            console.log(err);
            console.log(err.path)
            console.log(err.message)
            switch(error.path) {
                case 'email':
                    setErrorMail(error.message)
                    break;
                case 'password':
                    setErrorPassword(error.message)
                    break;
                case 'confirmPassword':
                    setErrorConfirmPassword(error.message)
                    break;
            }
        }
    }

    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>Registrate YA !!!</Text>
          <InputForm label={"E-Mail"} onChange={setEmail} error={errorMail} />
          <InputForm
            label={"Pokeseña"}
            onChange={setPassword}
            error={errorPassword}
            isSecure={true}
          />
          <InputForm
            label={"Confirma la PokeSeña"}
            onChange={setConfirmPassword}
            error={errorConfirmPassword}
            isSecure={true}
          />
          <SubmitButton onPress={onSubmit} title="Enviar" />
          <Text style={styles.sub}>Ya eres Entrenador ?</Text>
          <Pressable style={styles.boton} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.subLink}>Logueate YA !!!</Text>
          </Pressable>
        </View>
      </View>
    );
}

export default Signup

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
    fontWeight: "bold",
    color: "blue"
  },
  sub: {
    fontSize: 14,
    fontFamily: "Josefin",
    fontWeight: "bold",
    color: "blue"
  },
  subLink: {
    fontSize: 14,
    fontFamily: "Josefin",
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