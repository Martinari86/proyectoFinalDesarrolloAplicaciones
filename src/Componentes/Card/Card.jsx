import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../global/color'


const Card = ({children}) => {
  return (
    <View style={styles.container}> 
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secundary,
        width: 250,
        height: 40,
        boxShadow: "#000",
        //shadowColor: ,
        //shadowOffset: {widht: 3, height: 3},
        //shadowOpacity:0.27,
        //shadowRadius: 4.65,
        marginBottom:10,
        marginTop: 10,
        marginRight: 10
    }



})