import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    PermissionsAndroid,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export const ScanScreen = ({ navigation }) => {
    // const url = 'https://dev2.shinetickets.com/api/v1/'
    // const uuid = 'da98243f-9a26-48de-893a-40491b6619e2'

    const onSuccess = async e => {
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


    useEffect(() => {
        const per = async () => {
            result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
        }
        per()
    }, [])
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


// export const GetHallAction = (data, locale, date) => {
//     return (dispatch) => {
//         dispatch(StartGetHallAction())
//         if (data?.dates?.length)
//             axios.get(`${url}${uuid}/map-and-seat-data-for-reserve?project_event_id=${data.id}&event_date_id=${date}&event_id=${data.id}&locale=${locale}`).then((r) => {
//                 dispatch(SuccessGetHallAction(r.data))

//             })
//                 .catch((error) => {
//                     dispatch(ErrorGetHallAction())
//                 })
//     }
// }