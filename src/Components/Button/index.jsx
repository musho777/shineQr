import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { QrSvg } from "../../../svg";
import { useNavigation } from "@react-navigation/native";

export const Button = () => {
    const navigation = useNavigation()
    return <TouchableOpacity onPress={() => navigation.navigate('ScanScreen')} style={styles.Button}>
        <QrSvg />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    Button: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: '#fee827',
        borderRadius: 7
    },
    txt: {
        color: 'white',
        fontSize: 22,
        fontWeight: '700'
    }
});