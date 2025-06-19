import { View, Text, Pressable, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function Recipe({ categories, foods }) {
    const navigation = useNavigation();

    const renderItem = ({ item, index }) => <ArticleCard item={item} index={index} navigation={navigation} />;

    return (
        <View style={styles.container}>
            <View testID="recipesDisplay">
                <FlatList
                    data={foods}
                    numColumns={2}
                    keyExtractor={(item) => item.idFood.toString()}
                    renderItem={renderItem}
                    testID="foodList"
                />
            </View>
        </View>
    );
}

const ArticleCard = ({ item, index, navigation }) => {
    return (
        <View style={[styles.cardContainer, { paddingLeft: 20, paddingRight: 15 }]} testID="articleDisplay">
            <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', item)}>
                <Image style={styles.articleImage} source={{ uri: item.recipeImage }} />
                <View style={styles.row}>
                    <Text style={styles.articleText}>{item.recipeName}</Text>
                    <Text style={styles.articleDescription}>{item.cookingDescription}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: wp(4), // mx-4 equivalent
        marginTop: hp(2),
    },
    title: {
        fontSize: hp(3),
        fontWeight: '600', // font-semibold
        color: '#52525B', // text-neutral-600
        marginBottom: hp(1.5),
    },
    loading: {
        marginTop: hp(20),
    },
    cardContainer: {
        justifyContent: 'center',
        marginBottom: hp(1.5),
        flex: 1, // Allows cards to grow and fill space evenly
    },
    articleImage: {
        width: '100%',
        height: hp(15),
        borderRadius: 35,
        backgroundColor: 'rgba(0, 0, 0, 0.05)', // bg-black/5
    },
    articleText: {
        fontSize: hp(1.5),
        fontWeight: '600', // font-semibold
        color: '#52525B', // text-neutral-600
        marginLeft: wp(2),
        marginTop: hp(0.5),
    },
    articleDescription: {
        fontSize: hp(1.2),
        color: '#6B7280', // gray-500
        marginLeft: wp(2),
        marginTop: hp(0.5),
    },
    row: {
        justifyContent: 'space-between', // Align columns evenly
    },
});
