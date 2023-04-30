//react
import { TextInput} from "react-native";

//styles
import { styles } from "./styles";

export default function TextInputCopmonent(){
    return(
        <TextInput style={styles.input} placeholder="Task Name" placeholderTextColor={'#6b6b6b'}/>
    )
}