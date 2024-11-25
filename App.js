import 'react-native-gesture-handler';
import Navigation from "./Navigation";
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { store } from './src/store/configStore';

const App = () => {
  const [initialRouteName, setInitialRouteName] = useState("")
  const CheckLogin = async () => {
    let uuid = await AsyncStorage.getItem("UUID")
    let id = await AsyncStorage.getItem("ID")
    if (uuid && id) {
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
    {initialRouteName && <Navigation initialRouteName={initialRouteName} />
    }
  </Provider>

}

export default App