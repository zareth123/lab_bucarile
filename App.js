import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Student Profile</Text>

        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Zareth Bucarile</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>21</Text>

        <Text style={styles.label}>Course/Year/Section:</Text>
        <Text style={styles.info}>BSCS 3-3</Text>

        <Text style={styles.label}>About Me:</Text>
        <Text style={styles.info}>
          A 3rd year college student at Cvsu Main Campus, hoping to graduate and make a living out of my course.
        </Text>
        <Text style={styles.label}>Achievements:</Text>
        <Text style={styles.info}>Dean’s Lister 2024</Text>

        <Text style={styles.label}>Skills:</Text>
        <Text style={styles.info}>Web Development</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // deep black background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#1e1e1e', // dark gray card background
    borderRadius: 20,
    padding: 20,
    width: '90%',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff', // white title
    textAlign: 'center',
    marginBottom: 15,
    letterSpacing: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b0b0b0', // light gray for labels
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: '#ffffff', // pure white for your details
    marginBottom: 5,
  },
});