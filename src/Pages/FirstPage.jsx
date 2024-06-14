import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Button } from '../Components/Button'
import { HallSvg, QrSvg } from "../../svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FirstPage = ({ navigation }) => {
    const Logout = async () => {
        await AsyncStorage.removeItem("key")
        navigation.navigate("Login")
    }
    return <View style={styles.container}>
        <Button onPress={() => navigation.navigate('ScanScreen')} svg={<QrSvg />} />
        {/* <Button onPress={() => navigation.navigate('HallPage')} svg={<HallSvg />} /> */}
        <TouchableOpacity onPress={() => { Logout() }}>
            <Text style={styles.text}>logout</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#69a3ff',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },
    text: {
        color: "white"
    }
});