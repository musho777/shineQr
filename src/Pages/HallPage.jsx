import { WebView } from 'react-native-webview';
import { useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { GoBackSvg } from '../../svg';

export const HallPage = ({ navigation }) => {
    let webviewRef = useRef(null)


    return <View style={{ width: '100%', height: '100%' }}>
        <TouchableOpacity onPress={() => navigation.navigate('FirstPage')} style={styles.button}>
            <GoBackSvg />
        </TouchableOpacity>
        <WebView
            ref={webviewRef}
            useWebKit={true}
            source={{ uri: `https://dev.shinetickets.com/qr` }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
        />
    </View>
}
const styles = StyleSheet.create({
    button: {
        // marginTop: 30,
        // position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 999
    },
});