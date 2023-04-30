//react
import { TextInput } from "react-native";

//styles
import { styles } from "./styles";

type props = {
  text: string;
  setTaskData: Function;
};

export default function TextInputCopmonent({ text, setTaskData }: props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={text}
      placeholderTextColor={"#6b6b6b"}
      onChangeText={(value) => setTaskData(value)}
    />
  );
}
