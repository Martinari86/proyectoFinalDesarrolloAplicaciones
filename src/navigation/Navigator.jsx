import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import { useState, useEffect } from "react";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user/UserSlice";
import { useDB } from "../hooks/useDB";
// {user ? <BottomTabNavigator /> : <AuthStack />}


const Navigator = () => {
  
  const { user } = useSelector(state => state.auth.value);
  const { getSession } = useDB()
  const dispatch = useDispatch()

  useEffect(()=>{
    (async () =>{
        try{
          const response = await getSession()
          if(response){
            const user = response
            dispatch(setUser({
              email: user.email,
              localId: user.localId,
              idToken: user.token
            }))
          }
        }catch(error){
          console.log(error);
        }
    })
  },[user])

  return (

      <NavigationContainer>
       
        <BottomTabNavigator />
      </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});