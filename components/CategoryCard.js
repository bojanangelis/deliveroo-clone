import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const CategoryCard = ({ imgUrl, title }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(title)}
            className="relative mr-5 mt-1 items-center shadow-sm"
        >
            <Image source={{ uri: imgUrl }} className="h-12 w-12 rounded" />
            <Text className="text-center text-gray-700 pt-1 font-semibold">
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CategoryCard;
