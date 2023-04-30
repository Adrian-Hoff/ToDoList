//expo
import { StatusBar } from "expo-status-bar";

// react
import { StyleSheet, Text, View } from "react-native";

//style
import { styles } from "./styles";

//components
import TextInputComponent from "../../components/TextInputComponent";
import AddButtonComponent from "../../components/AddButtonComponent";
import TaskComponent from "../../components/TaskComponent";

export default function Home() {
  const date = new Date();

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function handleTaskRemove(text: string) {
    console.log(text);
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.taskName}>Daily Tasks</Text>
      <Text style={styles.taskDate}>
        {day[date.getDay()] +
          ", " +
          month[date.getMonth()] +
          " " +
          date.getDate() +
          ", " +
          date.getFullYear()}
      </Text>

      <View style={styles.form}>
        <TextInputComponent text="Task" />
        <TextInputComponent text="Date" />
        <AddButtonComponent />
      </View>
      <Text style={styles.listTittle}>Today's Tasks</Text>
      <TaskComponent
        name="Clean my room"
        date="2:00 PM"
        onRemove={() => handleTaskRemove("Clean my room")}
      ></TaskComponent>
    </View>
  );
}
