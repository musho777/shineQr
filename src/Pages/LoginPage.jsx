import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export const Login = ({ navigation }) => {
  const data = [
    {
      "uuid": "da98243f-9a26-48de-893a-40491b6619e2",
      "id": "5"
    }
  ]
  const [valueUuid, setValueUuid] = useState("")
  const [valueId, setValueId] = useState("")

  const [error, setError] = useState("")

  const CheckLogin = async () => {
    let uuid = await AsyncStorage.getItem("UUID")
    let id = await AsyncStorage.getItem("ID")
    if (uuid && id) {
      navigation.navigate("FirstPage")
    }

  }
  useEffect(() => {
    CheckLogin()
  }, [])


  const CheckPin = async () => {
    setError("")
    if (data[0].uuid == valueUuid && data[0].id == valueId) {
      await AsyncStorage.setItem("UUID", valueUuid)
      await AsyncStorage.setItem("ID", valueId)
      navigation.navigate("FirstPage")
    }
    else {
      setError("wrong Data")
    }
  }
  return <ImageBackground
    source={(require('../image/bg1.png'))}
  >
    <StatusBar
      translucent
      backgroundColor="transparent"
    />
    <View style={styles.continer}>
      {/* <Text style={styles.header}>Login</Text> */}
      <View style={styles.inputWrapper}>
        <View style={{ gap: 10 }}>
          <TextInput style={styles.input} value={valueUuid} placeholder="UUID" onChangeText={(e) => setValueUuid(e)} />
          <TextInput style={styles.input} value={valueId} placeholder="ID" onChangeText={(e) => setValueId(e)} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => CheckPin()}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    </View>
  </ImageBackground>
}

const styles = StyleSheet.create({
  continer: {
    height: "100%",
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,

  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  header: {
    fontSize: 30,
    color: "black",
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: 'black',
  },
  button: {
    width: 200,
    backgroundColor: "#ffce00",
    justifyContent: 'center',
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontWeight: '900',
    fontSize: 15,
  }
});