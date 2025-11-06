import { View , Text} from "react-native";
import { useState } from "react";
import Custominput from "../../components/Custominput";
 import CustomButton from "../../components/CustomButton";





export default function ServiceRegistryScreen ({navigation}:any) {

    const [item,setItem] = useState('');

    const handleOnSave = () => {
if(item.trim() === " ") return;

navigation.navigate('Tabs',{
    screen: 'Home',
    params: {newItem:item}
});
setItem('');

    }; 

return (

    <View>  
        <Text>Agregar nuevo servicio</Text>
        <Custominput
        value={item}
        placeholder='Ingresa algun servicio'
        onChange={setItem}>
        </Custominput>

        <CustomButton
        title="Guardar"
        onPress={handleOnSave}>

        </CustomButton>
          
                  
    </View>
)




}