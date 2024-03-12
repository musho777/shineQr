import React, { Fragment, useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    ImageBackground,
    PermissionsAndroid
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export const ScanScreen = ({ navigation }) => {
    const [scan, setScan] = useState(true);
    const [scanResult, setScanResult] = useState(false);
    const [result, setResult] = useState(null);
    const [permision, setPermision] = useState(true);
    const [r, setR] = useState(false)
    const [qrCode, setQrCode] = useState('')
    console.log('22')
    const onSuccess = e => {
        const check = e.data;
        setQrCode(check)
        dispatch(check_accaunt(check))
    };
    activeQR = () => {
        setScan(true);
    };
    scanAgain = () => {
        setScan(true);
        setResult(true);
    };

    useEffect(() => {
        const per = async () => {
            let result = r
            if (!result) {
                const interval = setInterval(async () => {
                    result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
                    setR(result)
                    if (result) {
                        setPermision(true)
                    }
                    else {
                        setPermision(false)
                    }
                }, 1000);
                return () => clearInterval(interval);
            }
            else {
                result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
                setR(result)
                if (result) {
                    setPermision(true)
                }
                else {
                    setPermision(false)
                }
            }
        }
        per()
    }, [r])
    return (
        <QRCodeScanner
            cameraStyle={{ width: '100%', height: '100%' }}
            onRead={onSuccess}
            bottomContent={
                <View
                    style={{
                        position: 'absolute',
                        bottom: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack('')}
                        style={{
                            backgroundColor: '#313131',
                            width: 200,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                        }}>
                        <Text
                            style={{ color: '#FFFFFF', fontFamily: 'Lexend-SemiBold', fontSize: 15 }}>
                            Close
                        </Text>
                    </TouchableOpacity>
                </View>

            }
        />
    )
}
