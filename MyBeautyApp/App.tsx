import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.content}>Probando el texto en pantalla</Text>

      <StatusBar style="auto" />
      <CustomButton title="BOTONAZO" onPress={() => { } } variant={'Primary'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afa5a5ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  content: {
    fontSize: 30,
    marginBottom: 8,
    textAlign: 'center',
  },
});



