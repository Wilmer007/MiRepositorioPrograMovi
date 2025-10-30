
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

<TouchableOpacity style={{justifyContent: 'flex-end', paddingHorizontal: 10}}
onPress={() => setIsSecureText(!isSecureText)}>
    <Ionicons name= {isSecureText ?  'eye' : 'eye-off'} size={20} color="black" />
</TouchableOpacity>
   </View>
   
</View>

)

}

const styles = StyleSheet.create({

    wrapper:
    {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: 20,
        marginLeft: 10,
    },
    inputContainer:
    {

flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'center',
paddingHorizontal: 10,
paddingVertical: 5,
marginTop: 5,
marginBottom: 5,
marginLeft: 20,

borderWidth: 2,
borderColor: '#111010ff',
borderRadius: 15,

    },
    input:{
        flexDirection: 'column',
         justifyContent: 'flex-start',

      
    }
});
export default CustomInput;