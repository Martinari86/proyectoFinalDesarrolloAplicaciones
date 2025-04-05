import {useFonts} from 'expo-font'
import Navigator from './src/navigation/Navigator';
import { Platform, SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'
import { useDB } from './src/hooks/useDB';
import { useEffect } from 'react';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  })

  const {initDB} = useDB()


  useEffect(() => {
    try{
      if(Platform.OS !== 'web'){
        initDB();
      }
    }catch(error){
      console.log(error)
    }
    
  }, []);

  if(!fontsLoaded || fontError) {
    return null;
  }

  if(fontsLoaded && !fontError) {
    return (
      <Provider store={store}> 
        <Navigator />
      </Provider> 
    );
  }
}