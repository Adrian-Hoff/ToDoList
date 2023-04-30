import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical:10,
    paddingHorizontal:14,
   
    
  },
  textContainer: {

    flex: 1,

    justifyContent:'center'
  },
  name: {
    color: "#fff",
    fontWeight:'300',
    fontSize: 20,
  },

  time: {

    color: "#6b6b6b",
    fontSize: 14,
  },

  buttonText: {
    width:16,
    height:2,
    backgroundColor: "#ff3333",

  },

  button: {
    width: 16,
    height: 32,
    

    alignItems: "center",
    justifyContent: "center",
  },
});
