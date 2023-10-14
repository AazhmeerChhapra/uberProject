import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native'
import NavOptions from '../components/NavOptions'

const HomeScreen = ()=>  {
 
    return (
      <SafeAreaView>
        <View className = "p-5">
            <Image 
            className = "w-20 h-20"
            
            source={{
                uri : "https://links.papareact.com/gzs"
            }}
            style = {{
                resizeMode : "contain"
            }
            }
            />
            <NavOptions />
        </View>
      </SafeAreaView>
    )
  
}
export default HomeScreen

const styles = StyleSheet.create({})
