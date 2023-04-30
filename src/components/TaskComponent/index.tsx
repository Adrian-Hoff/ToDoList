// react
import { View, Text, TouchableOpacity } from "react-native";

//styles
import { styles } from "./styles";
export default function TaskComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>Task Do Something</Text>
        <Text style={styles.time}>Till time</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={()=>console.log('s')}>
        <View style={styles.buttonText}></View>
      </TouchableOpacity>
    </View>
  );
}
