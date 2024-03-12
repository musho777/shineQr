import { SafeAreaView, View } from "react-native"
import { FirstPage } from "./src/Pages/FirstPage"
import 'react-native-gesture-handler';
import Navigation from "./Navigation";
import { ScanScreen } from "./src/Pages/QrScan";

const App = () => {
  // return <ScanScreen />
  return <Navigation />

}

export default App