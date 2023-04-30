//react
import { TextInput} from "react-native";

//styles
import { styles } from "./styles";

type props = {
    text :string
}

export default function TextInputCopmonent({text}:props){
    return(
        <TextInput style={styles.input} placeholder={text} placeholderTextColor={'#6b6b6b'}/>
    )
}