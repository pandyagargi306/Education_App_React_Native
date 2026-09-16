import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ColorGenerator() {
  const [colors, setColors] = useState([]);

  const generateColor = () => {
    const randomColor = `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    )`;

    setColors([...colors, randomColor]);
  };

  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={generateColor}
      >
        <Text style={styles.buttonText}>
          Generate Random Color
        </Text>
      </TouchableOpacity>

      {colors.map((color, index) => (
        <View
          key={index}
          style={[styles.colorBox, { backgroundColor: color }]}
        >
          <Text>{color}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0099cc",
    padding: 15,
    margin: 15,
    borderRadius: 5,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  colorBox: {
    height: 80,
    marginHorizontal: 20,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});