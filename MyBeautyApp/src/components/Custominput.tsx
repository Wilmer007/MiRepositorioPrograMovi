
import { View , TextInput, TouchableOpacity,Text,} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
    type?: 'text'|'email' | 'password' | 'number';
    value?: string;
    onChange: (text:string) => void;
    required?: boolean;
    placeholder: string;

}


function CustomInput({type, required,value,placeholder ,onChange}: Props) {
const [isSecureText, setIsSecureText] = useState(type === 'password');

    const icon = type === 'email' ? 'email' : type === 'password' ? 'lock' : 'text-fields';

return(
//Wraper  
<View> 
    // inputcontainer
   <View>   
    <MaterialIcons name={icon as any} size={24} color="black" />
    <TextInput 
    placeholder={placeholder}
    value={value}
    onChangeText={onChange}
    onBlur={()=>{}}
    secureTextEntry={isSecureText}
    />

<TouchableOpacity
onPress={() => setIsSecureText(!isSecureText)}>
    <Text>Icons</Text>
    <Ionicons name= {isSecureText ?  'eye' : 'eye-off'} size={24} color="black" />
</TouchableOpacity>
   </View>
   
</View>

)

}

export default CustomInput;