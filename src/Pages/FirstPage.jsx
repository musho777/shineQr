import { StyleSheet, Text, View } from "react-native"
import { Button } from '../Components/Button'

export const FirstPage = () => {
    return <View style={styles.container}>
        <Button />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#69a3ff',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});