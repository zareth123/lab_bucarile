import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  const [brand, setBrand] = useState('');
  const [brands, setBrands] = useState([]);

  const addBrand = () => {
    if (brand.trim() !== '') {
      setBrands([...brands, brand]);
      setBrand('');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>My Favorite Clothing Brands</Text>
        <Text style={styles.description}>
          Add your favorite clothing brands to the list below.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Item"
            placeholderTextColor="#888"
            value={brand}
            onChangeText={setBrand}
          />
          <TouchableOpacity style={styles.addButton} onPress={addBrand}>
            <Text style={styles.addButtonText}>ADD</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={brands}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>• {item}</Text>
          )}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // dark background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    elevation: 8,
    shadowColor: '#ffffff',
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#b0b0b0',
    textAlign: 'center',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#3a3a3a',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  listItem: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 8,
  },
});
