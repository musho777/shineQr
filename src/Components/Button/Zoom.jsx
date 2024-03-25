import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

export const Zoom = ({ event, getSinglPage, value, setValue, isParonyanEvent, paronyanSeans, open }) => {
    const [isInteracting, setIsInteracting] = useState(false);
    const handleChange = (newValue) => {
        setIsInteracting(true)
        setValue(newValue);
        setIsInteracting(true)
    };

    useEffect(() => {
        const interactionTimeout = 250; // Adjust as needed
        let timeoutId;
        if (isInteracting) {
            timeoutId = setTimeout(() => {
                setIsInteracting(false);
            }, interactionTimeout);
        } else {
            clearTimeout(timeoutId);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isInteracting, setValue]);

    const [position, setPosition] = useState({ y: 0, x: 0 });
    const [activeTicket, setActiveTicket] = useState({});

    return (
        <View style={styles.container}>
            <PinchGestureHandler
                onGestureEvent={handleChange}
                onHandlerStateChange={({ nativeEvent }) => {
                    if (nativeEvent.oldState === State.ACTIVE) {
                        handleChange({ scale: 1 });
                    }
                }}>
                <Animated.View>
                    <Image
                        source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }}
                        style={styles.image}
                    />
                </Animated.View>
            </PinchGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 1000,
        height: 1000,
        resizeMode: 'contain',
    },
});
