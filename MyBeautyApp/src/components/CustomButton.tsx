import { StyleSheet ,TouchableOpacity, View , Text} from "react-native";


type Props = {
    title: string;
    onPress?: () => void;
    variant: 'Primary' | 'Secondary' | 'Tertiary';

};
export default function CustomButton({title,onPress,variant = 'Primary'}: Props) {
    const styles = getStyles(variant);
    return(
        <View>
            <TouchableOpacity style={styles.button}onPress={(onPress)}>  
            <Text style ={styles.buttonTitle}> {title} </Text>
            </TouchableOpacity>


        </View>
    )}
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

const getStyles = (variant:'Primary'| 'Secondary' | 'Tertiary') => {
  return StyleSheet.create({
    button:{
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 5,

      backgroundColor: variant === 'Primary' ? '#523954' : variant === 'Secondary' ? '#206edbff' : '#ffffff',
    },
  buttonTitle:{
    color: variant === 'Primary' ? '#cd7121ff' : variant === 'Secondary' ? 'rgba(50, 212, 50, 1)' : '#d2c617ff' ,   
    fontWeight: 'bold',
  }
});
}

//            <TouchableOpacity style={styles.button}onPress={(onPress)}>  
