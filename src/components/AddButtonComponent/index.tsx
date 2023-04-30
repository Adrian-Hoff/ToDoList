//react
import { TouchableOpacity, Text } from "react-native";

//styles
import { styles } from "./styles";

export default function AddButtonComponent(){

    function handleTaskAdd(){
        
    }

    return(
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>        
    )
}