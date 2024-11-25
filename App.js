import 'react-native-gesture-handler';
import Navigation from "./Navigation";
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { store } from './src/store/configStore';

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
  return <Provider store={store}>
    <Navigation initialRouteName={initialRouteName} />
  </Provider>

}

export default App