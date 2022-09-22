import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import {
    removeFromBasket,
    selectBasketItems,
    selectBasketTotal,
} from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    if (items.length === 0 && navigation.canGoBack()) {
        navigation.goBack();
    }
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-50">
                <View className="p-5 border-b border-[#ecc716] bg-white shadow">
                    <View>
                        <Text className="text-lg font-bold text-center">
                            Basket
                        </Text>
                        <Text className="text-center text-gray-400">
                            {restaurant.title}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-4 right-5"
                    >
                        <XCircleIcon color="#ecc716" size={50} />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Text className="flex-1 font-medium">
                        Deliver in 50 - 75 min
                    </Text>
                    <TouchableOpacity>
                        <Text className="text-[#ecc716] font-medium">
                            Change
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInBasket).map(
                        ([key, items]) => (
                            <View
                                key={key}
                                className="flex-row items-center space-x-3 bg-white py-2 px-5"
                            >
                                <Text className="text-[#ecc716]">
                                    {items.length} x
                                </Text>
                                <Image
                                    source={{
                                        uri: urlFor(items[0]?.image).url(),
                                    }}
                                    className="h-12 w-12 rounded-full"
                                />
                                <Text className="flex-1">{items[0]?.name}</Text>
                                <Text className="text-gray-600">
                                    <Currency
                                        quantity={items[0]?.price}
                                        currency="EUR"
                                    />
                                </Text>
                                <TouchableOpacity
                                    onPress={() =>
                                        dispatch(removeFromBasket({ id: key }))
                                    }
                                >
                                    <Text className="text-[#ecc716] text-xs">
                                        remove
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    )}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={basketTotal} currency="EUR" />
                        </Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={5.99} currency="EUR" />
                        </Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="font-extrabold">Order Total</Text>
                        <Text className="font-extrabold">
                            <Currency
                                quantity={basketTotal + 5.99}
                                currency="EUR"
                            />
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PreparingOrder')}
                        className="rounded-lg bg-[#ecc716] p-4"
                    >
                        <Text className="text-center text-white text-lg font-bold">
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BasketScreen;
