//react
import { StyleSheet } from "react-native";
const color = "#00aaff";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    paddingHorizontal: 16,
  },

  taskName: {
    color: "#FFF",
    fontSize: 32,

    marginTop: 48,
  },
  taskDate: {
    color: "#a6a6a6",
    fontSize: 18,
    fontWeight: "100",
  },
  form: {
    width: "100%",

    marginTop: 16,
    marginBottom: 42,
  },
  listTittle: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 16,
    fontWeight: "100",
  },
  buttonText: {
    fontWeight: "300",
    color: color,
    fontSize: 20,
  },

  button: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: color,
    padding: 10,
    borderRadius: 5,

    alignItems: "center",
    justifyContent: "center",
  },
});
