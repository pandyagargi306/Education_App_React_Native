import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

const HookEffect = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List Of Students</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={require("../../assets/images/ed.png")}
              style={styles.image}
            />

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>Email: {item.email}</Text>
            <Text style={styles.text}>Phone: {item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HookEffect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9c2f0",
    padding: 10,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  text: {
    fontSize: 14,
  },
});