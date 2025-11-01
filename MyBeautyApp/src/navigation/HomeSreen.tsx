import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from './StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function HomeScreen(Route: Props) {
    const { email } = Route.route.params;
    return (
        <View>
            <Text>Bienvenido</Text>
            <Text>Correo:{email}</Text>
            
        </View>
        
    );
}