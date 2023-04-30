// react
import { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Alert,
} from "react-native";

//style
import { styles } from "./styles";

//components
import TextInputComponent from "../../components/TextInputComponent";
import AddButtonComponent from "../../components/AddButtonComponent";
import TaskComponent from "../../components/TaskComponent";

export default function Home() {
  type taskProps = {
    id: number;
    title: string;
    date: string;
  };
  const [tasks, setTasks] = useState([{} as taskProps] || null);
  const [taskDate, setTaskDate] = useState("");
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    console.log(`
    name:${taskName}
    date: ${taskDate}  
    `);
  }, [taskDate, taskName]);

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

  function handleTaskAdd() {
    if (tasks == null) {
      setTasks([
        {
          id: 1,
          title: taskName,
          date: taskDate,
        },
      ]);
    } else {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          title: taskName,
          date: taskDate,
        },
      ]);
    }
    setTaskDate("");
    setTaskName("");

    /* 
    
    set([tasks, {}]) => [tasks[], {}] add an array into another
    set([...tasks, {}]) => [...{}, {}, {}, {}] add and element into an array
    */
  }
  function handleTaskRemove(text: string, id: number) {
    const tasksThatWontBeRemoved = tasks.filter((e) => e.id != id);

    Alert.alert(
      "Delete Task",
      `Are you sure you want to remove "${text}" from your task list?`,

      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setTasks(tasksThatWontBeRemoved);
            // Alert.alert(`"${text}" has been deleted`);
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  }

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
        <TextInputComponent
          taskData={taskName}
          setTaskData={setTaskName}
          text="Task"
        />
        <TextInputComponent
          taskData={taskDate}
          setTaskData={setTaskDate}
          text="Date"
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
        {/* <AddButtonComponent /> */}
      </View>
      <Text style={styles.listTittle}>Today's Tasks</Text>
      <>
        {/* Scrollview loads all components,
      even when they are not on the screen. 
      This can be noticed with "overflow: visible", 
      ScrollView => performance disadvantages
      to enourmous lists*/}
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
      </ScrollView>  */}
        {/* FlatList Generates items as the user 
        scrolls down the list. This can be 
        noticed with "overflow: visible". 
        Compared to the ScrollView, the 
        FlatList has performance advantages, 
        especially for enormous lists */}
      </>

      <>
        {tasks == null
          ? null
          : tasks.map((task) => {
              task.id ? "undefined" : setTasks(null as any);
            })}
      </>

      <FlatList
        ListFooterComponent={<View style={{ height: 0 }} />}
        data={tasks}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <TaskComponent
            key={Math.random()}
            name={item.title}
            date={item.date}
            onRemove={() => handleTaskRemove(item.title, item.id)}
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
