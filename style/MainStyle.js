import { StyleSheet } from "react-native";

 const image = { uri: "https://img.freepik.com/free-vector/grunge-football-soccer-background_1048-7979.jpg?size=338&ext=jpg" };
 const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      borderColor: "#000",
      borderWidth: 3,
      borderStyle: "solid"
    },
  });

  const specificStyle = StyleSheet.create({
    specificContainer: {
      backgroundColor: "green"
    }
  });

export default styles;

  

 