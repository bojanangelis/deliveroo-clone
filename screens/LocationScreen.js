import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { XCircleIcon } from 'react-native-heroicons/solid';

const LocationScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-white">
            <View className="flex-1 bg-gray-50 z-50">
                <View className="p-6 border-b border-[#ecc716] bg-white shadow">
                    <View>
                        <Text className="text-lg font-semibold text-center">
                            Location
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-4 right-5"
                    >
                        <XCircleIcon color="#ecc716" size={50} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Current location</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LocationScreen;
