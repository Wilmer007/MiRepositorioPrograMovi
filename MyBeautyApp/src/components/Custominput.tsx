
import { View , TextInput, TouchableOpacity,Text,StyleSheet,} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { KeyboardTypeOptions } from "react-native";
type Props = {
    type?: 'text'|'email' | 'password' | 'number';
    value?: string;
    onChange: (text:string) => void;
    required?: boolean;
    placeholder: string;

}


function CustomInput({type, required,value,placeholder ,onChange}: Props) {
const [isSecureText, setIsSecureText] = useState(type === 'password');

const [ispasswordField, setIsPasswordField] = useState(type === 'password');

    const icon = type === 'email' ? 'email' : type === 'password' ? 'lock' : 'text-fields';

   const KeyboardType: KeyboardTypeOptions = type === 'email' ? 'email-address' : type === 'number' ? 'numeric' : 'default';  
   
   //funcion para calcular errores de validacion 

   const getError = () => {
    if (type === 'email' && !value?.includes ('@'))
    return 'Correo invalido';
    if (type === 'password' && (value?.length ?? 0) < 6)
    return 'La contraseña debe tener al menos 6 caracteres';
   }
 
   const error = getError();

return(
//Wraper  
<View style={styles.wrapper}> 
    // inputcontainer
   <View style={[styles.inputContainer, error && styles.inputError]}>   
    <MaterialIcons name={icon as any} size={20} color="black" />
    <TextInput style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChange}
    onBlur={()=>{}}
    secureTextEntry={isSecureText}
    />

{isSecureText && <TouchableOpacity 
onPress={() => setIsSecureText(!isSecureText)}>
    <Ionicons name= {isSecureText ?  'eye' : 'eye-off'} size={20} color="black" />
</TouchableOpacity>}
   </View>
   {error && <Text style={styles.inputContainer}>{error}</Text>}
</View>

)

}

const styles = StyleSheet.create({

    wrapper:
    {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
        marginLeft: 10,


    },
    inputContainer:
    {

flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'flex-start',

paddingHorizontal: 10,
paddingVertical: 3,
marginTop: 20,
marginBottom: 5,
marginLeft: 20,

borderWidth: 1,
borderColor: '#111010ff',
borderRadius: 10,

    },
    input:{
        flexDirection: 'column',
         justifyContent: 'flex-start',

      
    },
    inputError:{
        borderColor: 'red',
    }
});
export default CustomInput;