import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Student = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {props.name}
      </Text>

      <Text style={styles.course}>
        {props.course}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 20,
    marginBottom: 15,
    backgroundColor: '#eeeeee',
    borderRadius: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  course: {
    fontSize: 18,
    marginTop: 8,
  },
});

export default Student;