import {
    Text,
    SafeAreaView,
    View,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == 'featured'] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            },
          }`
            )
            .then((data) => {
                setFeaturedCategories(data);
            });
    }, []);

    return (
        <SafeAreaView className="bg-white flex-1">
            <View className="flex-row items-start pt-2 mx-4 my-3 space-x-2">
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-lg">
                        Current Location{' '}
                        <ChevronDownIcon size={20} color="#00ccbb" />
                    </Text>
                </View>
                <UserIcon size={28} color="#00ccbb" />
            </View>
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-100 p-3 rounded-lg">
                    <SearchIcon color="gray" size={20} />
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsIcon color="#00ccbb" />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="bg-gray-50"
            >
                <Categories />
                {featuredCategories?.map((category) => (
                    <FeatureRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
