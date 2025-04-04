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
      <FlatList
        showsVerticalScrollIndicator={false} 
        keyExtractor={element => element}
        data={categories}
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
        backgroundColor: colors.secondary,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }
})