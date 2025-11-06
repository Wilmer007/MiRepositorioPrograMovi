import { View ,Text} from "react-native";
import CustomButton from "../components/CustomButton";
import { navigationRef } from "../navigation/NavigationService";
import LoginScreen from "./LoginScreen";

export default function ProfileScreen({navigation}: any) {

    const handleLogout = () => {
        
        if (navigationRef.isReady()){
            navigationRef.reset({
                // indica la vista actual al momento de reiniciar el stack 
                index:0,
                // es un array de objetos , cada uno de estos representa cada ruta
                routes: [{name: 'Login'}],
            })
        }
    }

    return (
        <View>
            <Text>Profile Screen</Text>
            <CustomButton title={'Cerrar sesion'} onPress={handleLogout}>
            </CustomButton>
            <CustomButton title='iR AL LOGIN'
            onPress={() =>
                navigation.navigate('Login')}/>
            
        </View>
    )
}