
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { imageName } from "../constant/Images";

export default RideFareList = ({ rides, onRideSelect,selectedId}) => {

    const renderItem = ({ item }) => {
        const isSelected = selectedId === item.id; 

        return (
            <TouchableOpacity 
                onPress={() => {
                    console.log("Single data", item);
                    onRideSelect(item);
                }}
                style={[styles.itemContainer, isSelected && styles.selectedItemContainer]}>
                <View style={styles.itemLeft}>
                    <Image resizeMode='contain'
                    source={{ uri: item.vehicle_icon }} style={styles.image} />
                    <View >
                        <Text style={styles.itemName}>{item.name} {item.seat}</Text>
                        <Text style={styles.itemDetails}>{item.duration} mins • {item.drop}</Text>
                    </View>
                
                </View>
                <View style={styles.itemRight}>
                    <Text style={styles.itemPrice}>{item.total_fare}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={rides}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={
                <>
                    <View style={styles.offerContainer}>
                        {/* <FontAwesome name="gift" size={16} color="pink" /> */}
                        <Text style={styles.offerText}>Get 50% Off on First Ride</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                        <Image resizeMode='contain' source={require('../assets/images/money.png') }  /> 
                        <Text style={styles.buttonText}>Cash</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                        <Image resizeMode='contain' source={require('../assets/images/discount.png') }  /> 
                            <Text style={styles.buttonText}>Offer</Text>
                        </TouchableOpacity>
                    </View>

                </>
            }
        />
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
     

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    itemRight: {

        alignItems: 'center',

    },
    image: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    itemName: {
        fontWeight: 'bold',
        color:'black'
    },seat:{ color:'black'},
    itemDetails: {
        color: 'gray',
        fontSize: 12,
        color:'black'
    },
    itemPrice: {
        fontWeight: 'bold',
        color:'black'
    },
    offerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor:'#EB6586',
        padding: 3,
    },
    offerText: {
        color: 'white',
        marginLeft: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        flex:1,
        flexDirection: 'row',

    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        padding: 3
    },
    bookButton: {
        backgroundColor: 'pink',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    bookButtonText: {
        color: 'white',
        fontWeight: 'bold',
    }, btmIcon: {
        width: 55,
        height: 37,
        marginRight: 10
    },
    selectedItemContainer:{
        borderColor:'grey',
        borderWidth:1,
        padding:3,
        borderRadius:5,
    },
});


