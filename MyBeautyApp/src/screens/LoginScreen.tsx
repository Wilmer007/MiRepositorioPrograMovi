import { useState } from "react";
import { View ,Text, Alert} from "react-native";
import CustomInput from "../components/Custominput";
import CustomButton from "../components/CustomButton";
import { StyleSheet } from "react-native";

export default function LoginScreen(navigation: any) {

  const [email, setEmail] = useState('');

  const hangleLogin = () => {
    try {
    navigation.navigate('Home', { email: email });
    } catch (error) {
      Alert.alert('Error al iniciar sesión')
    }
  }

  return (
    
    
  <View style={styles.container}>
<View style={styles.OutterContainer}>

</View>
  <Text style={styles.content}>Sign in</Text>

<View style={styles.containerInside}>
    <CustomInput
        value={email}
        placeholder="Correo Electrónico"
        onChange={setEmail}
        type="email"
      />

      </View>
      <CustomButton title="Ingresar" onPress={() => { } } variant={'Primary'}/>

        
      <CustomButton title="Registrarse" onPress={() => { } } variant={'Secondary'}/>
      </View>
      

  );
}

const styles = StyleSheet.create({
  container: {
    // flex abilita uso de flexbox
    flex: 1,
    //eje horizontal
    alignItems: 'center',
    //eje vertical
    justifyContent: 'center',
    padding: 30,
backgroundColor: '#efede9ac',},

OutterContainer:{
top: 80,
bottom: 150,
position: 'absolute',
backgroundColor: 'white',
borderWidth: 1,
borderColor: '#dddddd',
boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 30px 0 rgba(0, 0, 0, 0.21)',
marginHorizontal: 20,
marginVertical: 5,


width: '90%',},

  containerInside: {
    justifyContent: 'flex-start',
    marginRight: 80,
    marginLeft: 10,
  },
  content: {
    color: '#090909ff',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: -150,
  },
  loginButton:{
    marginTop: 10,
    backgroundColor: '#04070bff',
  }
  
});



//<CustomButton title="Ingresar" onPress={() => { } } variant={'Primary'}/>
     // <Text style={styles.content}></Text>
   //  <Text style={styles.content}></Text>

   /*<StatusBar style="auto" />
        <CustomInput
        value={email}
        placeholder="Correo Electrónico"
        onChange={setEmail}
        type="text"
      /> */