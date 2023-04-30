// react
import { View, Text, TouchableOpacity } from "react-native";

//styles
import { styles } from "./styles";

type props = {
  name: string;
  date: string;
  onRemove: () => void;
};

export default function TaskComponent({ name, date, onRemove }: props) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{date}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <View style={styles.buttonText}></View>
      </TouchableOpacity>
    </View>
  );
}
