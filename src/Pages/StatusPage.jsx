import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ErrorSvg, GoBackSvg, SuccessSvg } from "../../svg"
import { useNavigation } from "@react-navigation/native"

export const StatusPage = (props) => {
    const navigation = useNavigation()
    const type = props.route?.params?.params?.type
    const msg = props.route?.params?.params?.msg
    const row = props.route?.params?.params?.row
    console.log(row)
    return <View style={styles.container}>
        {type ?
            <SuccessSvg /> :
            <ErrorSvg />
        }
        {type ?
            <View style={styles.data}>
                <Text style={styles.text}>Success</Text>
                <View >
                    <View style={styles.rowSeat}>
                        <Text style={styles.rowText}>row</Text>
                        <Text style={styles.rowText}>{row?.row}</Text>
                    </View>
                    <View style={[styles.rowSeat, { backgroundColor: '#f0eded' }]}>
                        <Text style={styles.rowText}>seat</Text>
                        <Text style={styles.rowText}>{row?.seat}</Text>
                    </View>
                    <View style={styles.rowSeat}>
                        <Text style={styles.rowText}>price</Text>
                        <Text style={styles.rowText}>{row?.price}</Text>
                    </View>
                    <View style={[styles.rowSeat, { backgroundColor: '#f0eded' }]}>
                        <Text style={styles.rowText}>place</Text>
                        {row?.parter ?
                            <Text style={styles.rowText}>parter</Text> :
                            <Text style={styles.rowText}>amf</Text>
                        }
                    </View>
                </View>
            </View> :
            <Text style={[styles.text, { color: 'red', fontSize: 20 }]}>{msg}</Text>

        }
        <TouchableOpacity onPress={() => navigation.navigate('FirstPage')} style={styles.button}>
            <GoBackSvg />
        </TouchableOpacity>
        <TouchableOpacity style={styles.HallButton} onPress={() => navigation.navigate('HallPage')} >
            <Text style={styles.HallButtonText}>Hall</Text>
        </TouchableOpacity>
    </View >
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: 10,
        fontSize: 40,
        color: `rgb(100,186,53)`,
        fontWeight: '900'
    },
    button: {
        marginTop: 30,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    buttonText: {
        fontWeight: '700'
    },
    HallButton: {

    },
    HallButtonText: {
        color: '#000',
        fontSize: 15,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 2,
        borderRadius: 15,
        marginTop: 20,
    },
    data: {
        justifyContent: 'center',
    },
    rowSeat: {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'space-between',
        paddingHorizontal: 3,
        backgroundColor: '#e0dcdc'
    },
    rowText: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600'
    }
});