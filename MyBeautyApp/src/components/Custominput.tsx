
import { View , TextInput, TouchableOpacity,Text,StyleSheet,} from "react-native";
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
const [isSecureText, setIsSecureText] = useState(type === 'email');

    const icon = type === 'email' ? 'email' : type === 'password' ? 'lock' : 'text-fields';

return(
//Wraper  
<View style={styles.wrapper}> 
    // inputcontainer
   <View style={styles.inputContainer}>   
    <MaterialIcons name={icon as any} size={20} color="black" />
    <TextInput style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChange}
    onBlur={()=>{}}
    secureTextEntry={isSecureText}
    />

<TouchableOpacity style={{padding: 10}}
onPress={() => setIsSecureText(!isSecureText)}>
    <Text></Text>
    <Ionicons name= {isSecureText ?  'eye' : 'eye-off'} size={20} color="black" />
</TouchableOpacity>
   </View>
   
</View>

)

}

const styles = StyleSheet.create({

    wrapper:
    {
    },
    inputContainer:
    {

flexDirection: 'row',
alignItems: 'center',
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 8,
paddingHorizontal: 13,
width: '80%',
    },
    input:{
        paddingHorizontal: 15,
        paddingVertical: 10,
    }
});
export default CustomInput;