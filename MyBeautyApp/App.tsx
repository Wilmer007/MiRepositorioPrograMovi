import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/Custominput';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
        <CustomInput
        value={email}
        placeholder="Correo Electrónico"
        onChange={setEmail}
        type="text"
      />

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
backgroundColor: 'gray',

  },
  content: {
    fontSize: 17,
    marginBottom: 8,
    textAlign: 'center',
  },
});



//<CustomButton title="Ingresar" onPress={() => { } } variant={'Primary'}/>
     // <Text style={styles.content}></Text>
   //  <Text style={styles.content}></Text>