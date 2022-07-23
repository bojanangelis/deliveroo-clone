import { SafeAreaView, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../features/restaurantSlice';
import { useSelector } from 'react-redux';

const PreparingOrderScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const animationProgress = useRef(new Animated.Value(0));
    const animationProgressCheck = useRef(new Animated.Value(0));

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 10000);
    }, []);

    useEffect(() => {
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 30630,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
        Animated.timing(animationProgressCheck.current, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [animationProgress]);

    return (
        <SafeAreaView className="bg-[#ecc716] flex-1 justify-center items-center">
            <LottieView
                progress={animationProgress.current}
                className="w-full self-start justify-center items-center"
                source={require('../assets/cooking.json')}
                autoPlay={true}
                loop
            />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Your order at {restaurant.title} is being prepared
            </Animatable.Text>

            <LottieView
                progress={animationProgressCheck.current}
                className="h-24 self-center"
                source={require('../assets/check-mark.json')}
                autoPlay={true}
                loop={false}
            />
        </SafeAreaView>
    );
};

export default PreparingOrderScreen;
