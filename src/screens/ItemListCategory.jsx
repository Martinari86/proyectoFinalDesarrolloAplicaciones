import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../global/color'
import products from '../data/products.json'
import ProductItem from '../Componentes/ProductItem/ProductItem'
import Search from '../Componentes/Search/Search'
import { useGetProductsByCategoryQuery } from '../services/shopService'

const ItemListCategory = ({
  route,
  navigation
}) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  const {category: categorySelected} = route.params;
  //console.log(categorySelected);
  const {data: productsFetched, error: errorFromFetched, isLoading} = useGetProductsByCategoryQuery(categorySelected)
  //console.log(data);


  useEffect(() => {
    regex = /\d/;
    const hasDigit = regex.test(keyWord);
    //console.log(hasDigit);
    if (hasDigit) {
      setError("No se admiten Números");
      return;
    }

    /*
    const productsPrefiltered = products.filter(
      (product) => product.category === categorySelected
    );
    */
    
    if(!isLoading){
      const productsFilter = productsFetched.filter((product) =>
        product.nombre.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      );
      setProductsFiltered(productsFilter);
      setError("");
    }
 }, [keyWord, categorySelected, productsFetched, isLoading]);



  return (
    <View style={styles.flatListContainer}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={productsFiltered}
        showsVerticalScrollIndicator={false} 
        renderItem={({ item }) => <ProductItem 
          product={item} 
          navigation={navigation}
          />}
        keyExtractor={(producto) => producto.id}
      />
    </View>
  );
};

export default ItemListCategory

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.tertiary,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});