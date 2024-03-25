import { StyleSheet, Text, View } from "react-native"
import { Button } from '../Components/Button'
import { HallSvg, QrSvg } from "../../svg";

export const FirstPage = ({ navigation }) => {
    return <View style={styles.container}>
        <Button onPress={() => navigation.navigate('ScanScreen')} svg={<QrSvg />} />
        <Button onPress={() => navigation.navigate('HallPage')} svg={<HallSvg />} />
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
});