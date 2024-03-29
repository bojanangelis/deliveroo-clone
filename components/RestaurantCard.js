import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { LocationMarkerIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Restaurant', {
                    id,
                    imgUrl,
                    title,
                    rating,
                    genre,
                    address,
                    short_description,
                    dishes,
                    long,
                    lat,
                });
            }}
            className="bg-white mr-3 shadow-sm mb-1"
        >
            <Image
                source={{ uri: urlFor(imgUrl).url() }}
                className="h-36 w-64 rounded-sm object-contain"
            />
            <View className="px-3 pb-4 space-y-1">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="lightgreen" size={22} />
                    <Text className="text-gray-500 text-xs">
                        <Text className="text-green-500">{rating}</Text> •{' '}
                        {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                    <Text className="text-xs text-gray-500">
                        {' '}
                        Nearby • {address}
                    </Text>
                    {/* tuka ke bide 0.4km away */}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RestaurantCard;
