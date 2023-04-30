// react
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

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

  const tasks = [
    {
      id: 1,
      title: "Lunch",
      date: "2:00 PM",
    },
    {
      id: 2,
      title: "Finish school homework and study",
      date: "3:00 PM",
    },
    {
      id: 3,
      title: "break",
      date: "5:00 PM",
    },
    {
      id: 4,
      title: "code",
      date: "5:10 PM",
    },
    {
      id: 5,
      title: "Do something",
      date: "6:30 PM",
    },
    {
      id: 6,
      title: "Clean room",
      date: "7:00 PM",
    },
    {
      id: 7,
      title: "Go to school",
      date: "8:00 PM",
    },
    {
      id: 8,
      title: "Finish homework",
      date: "9:00 PM",
    },
    {
      id: 9,
      title: "Finish study",
      date: "10:00 PM",
    },
    {
      id: 10,
      title: "Finish",
      date: "11:00 PM",
    },
  ];

  return (
    <View style={styles.container}>
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

      {/* Scrollview loads all components,
      even when they are not on the screen. 
      This can be noticed with "overflow: visible", 
      ScrollView => performance disadvantages
      to enourmous lists
      */}

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {tasks.map((task) => {
          return (
            <TaskComponent
              key={task.id}
              name={task.title}
              date={task.date}
              onRemove={() => handleTaskRemove(task.title)}
            />
          );
        })}
      </ScrollView> */}

      {/* 
        FlatList Generates items as the user 
        scrolls down the list. This can be 
        noticed with "overflow: visible". 
        Compared to the ScrollView, the 
        FlatList has performance advantages, 
        especially for enormous lists
      */}
      <FlatList
        ListFooterComponent={<View style={{ height: 0 }} />}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskComponent
            key={item.id}
            name={item.title}
            date={item.date}
            onRemove={() => handleTaskRemove(item.title)}
          />
        )}
        ListEmptyComponent={() => (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              No tasks
            </Text>
          </View>
        )}
      />
    </View>
  );
}
