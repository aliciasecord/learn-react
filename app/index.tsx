import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";


export default function Index() {
  const [count, setCount] = useState(0); // start at 0
    const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const loadCount = async () => {
      try {
        const savedCount = await AsyncStorage.getItem('counter');
        if (savedCount !== null) {
          setCount(parseInt(savedCount));
        }
      } catch (e) {
        console.log("Failed to load count:", e);
      }
    };
    loadCount();
  }, []);
  const updateCount = async (newCount: number) => {
    setCount(newCount);
    try {
      await AsyncStorage.setItem('counter', newCount.toString());
    } catch (e) {
      console.log("Failed to save count:", e);
    }
  };
  return (
    <View style={[styles.container, showBorder ? styles.borderOn : null]}>
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
      <TouchableOpacity
        style={[styles.button, { marginTop: 20}]}
        onPress={() => updateCount(1000)}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowBorder(!showBorder)} // toggle boolean
      >
        <Text style={styles.buttonText}>
          {showBorder ? "Hide Border" : "Show Border"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000ff",
  },
  text: {
    fontSize: 24,
    color: "cyan",
  },
  button: {
    backgroundColor: "cyan",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 5,
  },
  buttonText: {
    color: "#white",
  },
  borderOn: {
    borderWidth: 5,
    borderColor: "cyan",
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
