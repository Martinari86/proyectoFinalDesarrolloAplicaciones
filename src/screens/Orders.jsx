import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
//import OrderData from "../data/orders.json";
import OrderItem from "../Componentes/OrderItem/OrderItem";
import { useGetOrdersQuery } from "../services/shopService";
import { useSelector } from "react-redux";


const OrderScreen = () => {
  const {data: OrderData, error, isLoading, isSuccess} = useGetOrdersQuery()
  const {localId} = useSelector(state => state.auth.value)
  const [ordersFiltered, setOrderFiltered] = useState()
  useEffect(() =>{
        if(isSuccess){
          const responseTransformed = Objetd.values(OrderData)
          const ordersByUser = responseTransformed.filter( order => orden.user === localId)
          setOrderFiltered(ordersByUser)
        }
 
  },[])

  return (
    <View>
      <FlatList
        data={ordersFiltered}
        keyExtractor={(orderItem) => orderItem.id}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});