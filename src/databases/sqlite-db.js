import { Platform } from 'react-native';

let openDatabase = () => {
  console.warn('SQLite no está disponible en la web');
  return null;
};

if (Platform.OS !== 'web') {
  const SQLite = require('expo-sqlite');
  openDatabase = SQLite.openDatabase;
}

export default openDatabase;
