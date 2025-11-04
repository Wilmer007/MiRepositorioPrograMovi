import { StyleSheet ,TouchableOpacity, View , Text} from "react-native";


type Props = {
    title: string;
    onPress: () => void;
    variant?: 'Primary' | 'Secondary' | 'Tertiary';

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
    backgroundColor: '#f7380eff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  content:{
    color: '#e91212ff',
  }
});

const getStyles = (variant:'Primary'| 'Secondary' | 'Tertiary') => {
  return StyleSheet.create({
    button:{
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 10,
      marginTop: 25,
      marginLeft: 0,
      marginRight: 0,

      backgroundColor: variant === 'Primary' ? '#0c070cff' : variant === 'Secondary' ? '#6a99dcff' : '#ffffff',
    },
  buttonTitle:{
    color: variant === 'Primary' ? '#f6f4f2ff' : variant === 'Secondary' ? 'rgba(24, 25, 25, 1)' : '#d2c617ff' ,   
    fontWeight: 'bold',
    flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'center',
    fontSize: 20,
    marginLeft: 0,


  }
});
}

//            <TouchableOpacity style={styles.button}onPress={(onPress)}>  
