import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../navigation/StackNavigator';
import CustomButton from '../components/CustomButton';
import ServiceRegistryScreen from './services/ServiceRegistryScreen';
import { useState, useEffect } from 'react';



export default function HomeScreen({navigation,route}: any) {

const [items,setItems]= useState<string[]> ([]);

const routeItem = route.params?.newItem; 

useEffect(()=>
console.log('item por parametros' + routeItem))

const handleRegisterService = () =>{
    navigation.navigate(ServiceRegistryScreen)
}

    return (
        <View>
            <Text>Bienvenido</Text>
            <CustomButton title="Agrega un servicio"
            onPress={handleRegisterService}>

           </CustomButton>
            </View>
            
        
    )

}