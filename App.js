import 'react-native-gesture-handler';
import Navigation from "./Navigation";
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [initialRouteName, setInitialRouteName] = useState("")
  const CheckLogin = async () => {
    let key = await AsyncStorage.getItem("key")
    if (key) {
      setInitialRouteName("FirstPage")
    }
    else {
      setInitialRouteName("Login")
    }
  }
  useEffect(() => {
    CheckLogin()
  }, [])
  return <Navigation initialRouteName={initialRouteName} />

}

export default App