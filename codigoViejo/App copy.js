/*
import { useState } from 'react'; //Hooks
import { StatusBar } from 'expo-status-bar'; //Componentes de Terceros
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'; //Componentes Core
import ItemInput from '../src/Componentes/ItemInput/ItemInput';
import CustomModal from '../src/Componentes/CustomModal/CustomModal';
import { colors1, colors2 } from '../global/color';
import Header from '../src/Componentes/Header/Header';
import Home from '../screens/Home';
import CategoryItems from '../src/Componentes/CategoryItems/CategoryItems';

const itemListExample = [
  {id:1, value:"Tomate"},
  {id:2, value:"Peras"},
  {id:3, value:"Pan"},
  {id:4, value:"Papas"},
  {id:5, value:"Manzana"},
  {id:6, value:"Tomate"},
  {id:7, value:"Peras"},
  {id:8, value:"Pan"},
  {id:9, value:"Papas"},
  {id:10, value:"Manzana"},
  {id:11, value:"Tomate"},
  {id:12, value:"Peras"},
  {id:13, value:"Pan"},
  {id:14, value:"Papas"},
  {id:15, value:"Manzana"},
]

export default function App() {
  //Deficiones de los estados del USE STATE
  const [textItem, setTextItem] = useState("")
  const [itemList, setItemList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  //Funciones de llenado de arrays
  const addItems = () => {
    setItemList(currentValue => [...currentValue, {id: Math.random(), value: textItem}])
    setTextItem("")

  }

  //Funciones disparadores de Eventos
  const handleChangeText = (text) => setTextItem (text)
  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const handleCancelModal = () =>{
    setModalVisible(false)
  }

  const handleDeleteModal = () =>{
    const filter = itemList.filter(item => item.id !== itemSelected.id)
    setItemList(filter)
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Categorias'></Header>
      <Home></Home>
      
      <ItemInput addItems={addItems} handleChangeText={handleChangeText} textItem={textItem}/>
      <View style={styles.itemsContainer}>
        <FlatList
          style={styles.flatList}
          data={itemList}
          //keyExtractor={task => task.id.toString}
          renderItem={({item}) =>(
            <TouchableOpacity 
              style={styles.item}
              onPress={() => handleModal(item)}
            >
                <Text style={styles.itemText}>{item.value}</Text>
            </TouchableOpacity>
          )}
        />

      </View>
      <CustomModal 
      itemSelected={itemSelected}
      modalVisible={modalVisible} 
      handleCancelModal={handleCancelModal} 
      handleDeleteModal={handleDeleteModal} 
      /> 
       
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors1.darkPurple,
    flex: 1,
    paddingTop: 30,
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    fontSize: 16,
    width: "250",
  },
  itemsContainer: {
    alignItems: "center",
    borderWidth: 1,
    marginTop: 15,
    paddingVertical: 10,
    width: "90%",
  },
  item: {
    alignItems: "center",
    backgroundColor: "#cccccc",
    borderRadius: 5,
    justifyContent: "center",
    marginVertical: 10,
    paddingVertical: 15,
    width: "90%",

  },
  itemText: {
    fontSize: 10,
    fontWeight: "bold", 
  },
  flatList:{
    width:"100%"
  },
  modalContainer:{
    backgroundColor:"white",
    width:"80%",
    alignContent:"center",
    gap: 20,
    paddingVertical: 20,
    borderRadius: 8
  },
  textContainer:{

  },
  btnContainer:{
    flexDirection: 'row',
    gap:20
  },
  textModal:{
    fontWeight: "bold"
  }

});

*/