import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { XCircleIcon } from 'react-native-heroicons/solid';

const OrderHelpScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-white">
            <View className="flex-1 bg-white z-50">
                <View className="p-6 border-b border-[#ecc716] bg-white shadow">
                    <View>
                        <Text className="text-lg font-semibold text-center">
                            Order Help
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-4 right-5"
                    >
                        <XCircleIcon color="#ecc716" size={50} />
                    </TouchableOpacity>
                </View>
                <View className="p-5 flex">
                    <Text className="text-lg">
                        How <Text className="text-[#ecc716]">Izvolte</Text> is
                        working ?
                    </Text>
                    <View className="mt-2">
                        <Text>Call us on 072-210-024</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OrderHelpScreen;
