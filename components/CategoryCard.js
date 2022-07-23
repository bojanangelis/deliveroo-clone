import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-4 shadow-sm">
            <Image source={{ uri: imgUrl }} className="h-16 w-16 rounded" />
            <Text className="text-center text-gray-700 pt-1 font-semibold">
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CategoryCard;
