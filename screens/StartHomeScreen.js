import { SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const StartHomeScreen = () => {
    const navigation = useNavigation();

    //Load all the data and push me to the home page.
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 5000);
    }, []);

    return (
        <SafeAreaView className="bg-[#ecc716] flex-1 justify-center items-center">
            <Animatable.Image
                source={require('../assets/IzvolteLogo.jpg')}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"
            />
            <Animatable.Text
                animation="fadeIn"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Your hunger, partner
            </Animatable.Text>
            <Progress.Bar size={50} color="white" indeterminate={true} />
        </SafeAreaView>
    );
};

export default StartHomeScreen;
