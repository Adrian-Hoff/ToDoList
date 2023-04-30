//react
import { TouchableOpacity, Text, View, Button} from "react-native";

//styles
import { styles } from "./styles";

export default function AddButtonComponent(){

    function handleTaskAdd(){
        
    }

    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>  
   
        </View>
             
    )
}