import { Button, Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../services/shopService";
import { useDispatch } from "react-redux";
//import allProducts from "../data/products.json";
import { isLoading } from "expo-font";
import { addCartItem } from "../features/cart/CartSlice";

const Details = ({route, navigation}) => {

  //const [product, setProduct] = useState(null);
  const [orientation, setHorientation] = useState('portrait');
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch();
  const {productId: idSelected} = route.params
  console.log(idSelected);
  const {data: product , error, isLoading} = useGetProductByIdQuery(idSelected)
  console.log(product);
  

  useEffect(() => {
    if(width > height) setHorientation("landscape")
    else setHorientation("portrait")
    
  }, [width, height]);

  const handleAddCart = () => {
    dispatch(addCartItem({...product, quantity: 1}))
  }

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go back" />
      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.mainContainer
              : styles.mainContainerLandscape
          }
        >
          <Image
            source={{ uri: product.imagen}}
            resizeMode="cover"
            style={orientation === 'portrait' ? styles.image : styles.imageLandscape}
          />
          <View style={orientation === 'portrait' ? styles.textContainer : styles.textContainerLandscape}> 
            <Text>{product.nombre}</Text>
            <Text>{product.tipo}</Text>
            <Text>{product.ataques}</Text>
            <Text style={styles.price}>${product.precio}</Text>
            <Button title="Add cart" onPress={handleAddCart}></Button>
          </View>
        </View>
      ) : null} 
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageLandscape: {
    width: 100,
    height: 100,
  },
  textContainer: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 10,
  },

  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 10,
  },
  price: {
    textAlign: "right",
    width: "100%",
  },
});