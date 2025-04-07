import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from "../data/categories.json"
import { colors } from '../global/color'
import CategoryItems from '../Componentes/CategoryItems/CategoryItems'
import { useGetCategoriesQuery } from '../services/shopService'

const Home = ({navigation}) => {
  const {data, error, isLoading} = useGetCategoriesQuery()
  console.log(data);
  

  return (
    <View style={styles.flatListContainer}>
      <Text style={styles.text}>Elige tu TIPO DE POKEMON !!!</Text>
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false} 
        keyExtractor={element => element}
        data={data}
        renderItem={({item})=> <CategoryItems 
          category={item} 
          navigation={navigation} />}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    flatListContainer: {
        width: '100%',
        backgroundColor: colors.tertiary,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text:{
      color:"blue",
      fontWeight: "bold",
      fontSize:"50px"

    }
})