import { StyleSheet, TouchableOpacity } from "react-native"

export const Button = ({ svg, onPress }) => {
    return <TouchableOpacity onPress={() => onPress()} style={styles.Button}>
        {svg}
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