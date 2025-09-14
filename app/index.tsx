import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";


export default function Index() {
  const [count, setCount] = useState(0); // start at 0

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setCount(count - 1)}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#777777",
  },
  text: {
    fontSize: 24,
    color: "white",
  },
  button: {
    backgroundColor: "#333333",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
  },
});
