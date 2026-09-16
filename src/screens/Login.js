import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Login = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CONTACT US</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Home", { name })
        }
      >
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "gray",
    padding: 15,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});