import { Icon } from '@rneui/base';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const data = [
    {
        id : "123",
        title : "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen : "MapScreen",
    },
    {
        id : "456",
        title : "Order Food",
        image: "https://links.papareact.com/28w",
        screen : "EatsScreen",
    },

];
const NavOptions = () => {

    return (
        <FlatList 
        className = "bg-white"
        horizontal
        data={data}
        renderItem={({item}) => (
            <TouchableOpacity className = "bg-gray-300 m-2 pl-6 pb-6 w-35 pr-6 pt-4" >
               <Image  
               
            source={{
                uri : item.image,
            }}
            style = {{

            }
            }
            className = "h-24 w-24"
            />
                <Text className = "font-semibold pt-2">
                    {item.title}
                </Text>
                <View className="p-2 bg-black rounded-full w-10 mt-4">
                    <Icon name='arrowright' color="white" type='antdesign' />

                    </View>
                
            </TouchableOpacity>
        )}
        />
    );
  }


export default NavOptions;
const styles = StyleSheet.create({});
