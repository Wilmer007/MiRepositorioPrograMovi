import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.content}>Open up App.tsx to start working on your app!</Text>
            <Text style = {styles.content}>Probando el texto en pantalla</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#206edbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    color: '#ffffff',
  }
});
