import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    PermissionsAndroid,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export const ScanScreen = ({ navigation }) => {
    const [scan, setScan] = useState(true);
    const [result, setResult] = useState(null);
    const [permision, setPermision] = useState(true);
    const [r, setR] = useState(false)
    const onSuccess = async e => {
        const check = e?.data;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const key = await AsyncStorage.getItem("key")
        var raw = JSON.stringify({
            "ticketNumber": JSON.parse(e.data).ticketNumber,
            "key": key
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.shinetickets.com/createAttendee", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    navigation.navigate('StatusPage', { params: { type: true, row: JSON.parse(e.data), data: result.newAttendee } })
                }
                else {
                    navigation.navigate('StatusPage', { params: { type: false, msg: result.message } })
                }
            })
            .catch(error => {
                navigation.navigate('StatusPage', { params: { type: false } })
            });
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
