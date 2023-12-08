import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabScreen from './TabScreen';
import LogIn from './Screens/Authentication/LogIn';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignUp from './Screens/Authentication/SignUp'




export default function App() {
  return (
  
      <SafeAreaView style={{flex:1}}>
      <SignUp/>
     
      </SafeAreaView>
     
    
  );
}

