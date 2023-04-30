//expo
import { StatusBar } from "expo-status-bar";

// react
import { StyleSheet, Text, View } from "react-native";

//style
import { styles } from "./styles";

//components
import TextInputCopmonent from "../../components/TextInputComponent";
import AddButtonComponent from "../../components/AddButtonComponent";

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

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.taskName}>Task name</Text>
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
        <TextInputCopmonent />
        <AddButtonComponent />
      </View>
    </View>
  );
}
