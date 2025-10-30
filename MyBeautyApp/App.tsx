import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/Custominput';
import { useState } from 'react';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <CustomInput
        value={password}
        placeholder="Password"
        onChange={setPassword}
        type="password"
      />
      <CustomButton title="Ingresar" onPress={() => { } } variant={'Primary'}/>
        <CustomButton title="Registrarse" onPress={() => { } } variant={'Secondary'}/>
      </View>
      
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
    padding: 20,
backgroundColor: 'gray',},

OutterContainer:{
top: 50,
bottom: 100,
position: 'absolute',
backgroundColor: 'white',
borderWidth: 2,
borderColor: '#111010ff',
borderRadius: 15,
width: '100%',},

  containerInside: {
    justifyContent: 'flex-start',
    marginRight: 80,
    marginLeft: 0,
  },
  content: {
    color: '#090909ff',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: -300,
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