import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeSreen";

export type TabsParamList = {
Home: undefined;
Profile: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {

    return (

        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{title : 'Inicio'}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{title : 'Perfil'}}/>
        </Tab.Navigator>

    );
}