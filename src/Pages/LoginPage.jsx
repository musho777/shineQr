import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export const Login = ({ navigation }) => {
  const data = [
    "yCdvFg6AvI85",
    "i1kPkXfptD9Q",
    "bS4njLSS6uaP",
    "uDyljQAUg7HX",
    "HwmvRpipwisM",
    "EFwJl2c035lP",
    "0d1wTn3k5HoC",
  ]
  const [value, setValue] = useState("")
  const [error, setError] = useState("")

  const CheckLogin = async () => {
    let key = await AsyncStorage.getItem("key")
    if (key) {
      navigation.navigate("FirstPage")
    }

  }
  useEffect(() => {
    CheckLogin()
  }, [])


  const CheckPin = async () => {
    setError("")
    if (data.includes(value)) {
      await AsyncStorage.setItem("key", value)
      navigation.navigate("FirstPage")
    }
    else {
      setError("wrong Password")
    }
  }
  return <View style={styles.continer}>
    <Text style={styles.header}>Login</Text>
    <View style={styles.inputWrapper}>
      <TextInput style={styles.input} value={value} placeholder="PIN" onChangeText={(e) => setValue(e)} />
      <TouchableOpacity style={styles.button} onPress={() => CheckPin()}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <Text style={{ color: "red" }}>{error}</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  continer: {
    height: "100%",
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  header: {
    fontSize: 30,
    color: "#ffce00"
  },
  input: {
    borderWidth: 1,
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: 200,
    backgroundColor: "#ffce00",
    justifyContent: 'center',
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
  },
  text: {
    color: 'white'
  }
});