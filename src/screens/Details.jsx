import { Button, Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../services/shopService";
import { useDispatch } from "react-redux";
//import allProducts from "../data/products.json";
import { isLoading } from "expo-font";
import { addCartItem } from "../features/cart/CartSlice";
import { colors } from "../global/color";

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
      <Button onPress={() => navigation.goBack()} title="Ir Atras" />
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
            <Text style={styles.text}>{product.nombre}</Text>
            <Text style={styles.text}>{product.tipo}</Text>
            <Text style={styles.text}>{product.ataques}</Text>
            <Text style={styles.text}>${product.precio}</Text> 
            <View style={styles.viewBoton}>
              <Button title="Añadir a la Pokebola" onPress={handleAddCart}></Button>
            </View>  
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
    alignItems: "center",
    //height:"100%",
    //width:"100%",
    backgroundColor: colors.tertiary,
    //padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.tertiary,
    height:"100%",
    width:"100%",
    //padding: 10,
    //gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  imageLandscape: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  textContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "start",
    gap: 10,
  },

  textContainerLandscape: {
    width: "100%",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "start",
    gap: 10,
  },
  text: {
    textAlign: "center",
    width: "100%",
  },
  viewBoton:{
    width: "100%",
  }
});