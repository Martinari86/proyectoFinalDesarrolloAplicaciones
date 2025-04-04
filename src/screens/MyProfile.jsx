import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AddButton from '../Componentes/AddButton/AddButton'
import { useGetProfileImageQuery } from '../services/shopService'
import { clearUser } from '../features/user/UserSlice'
import { useDB } from '../hooks/useDB'


const MyProfile = ({navigation}) => {

  const {imageCamera, localId} = useSelector(state => state.auth.value)
  const {data: imageFromBase} = useGetProfileImageQuery(localId)
  const {truncateSessionTable} = useDB()
  const dispatch = useDispatch()
  
  const launchCamera = () => {
    navigation.navigate('Image selector')
  }

  const defaultImageRoute = "../../assets/defaultProfile.png"

  const signOut = async () =>{
    try{
        const response = await truncateSessionTable()
        dispatch(clearUser())
    } catch (error){
        console.log(error);
        
    }
  }
  return (
    <View style={styles.container}>
    {imageFromBase || imageCamera ? 
    (
      <Image 
        source={{uri: imageFromBase?.image || imageCamera}}
        style={styles.image}
        resizeMode='cover'
      />
    ) : 
    (      
      <Image 
        source={require(defaultImageRoute)}
        style={styles.image}
        resizeMode='cover'
      />)}

      <AddButton 
        onPress={launchCamera}
        title='Pon aquí tu Foto de Entrenador Pokemon'
      />
       <AddButton 
        onPress={signOut}
        title='Sign Out'
      />

{/*       
      Imagien por defecto

      Imagen de pefil 
*/}
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});