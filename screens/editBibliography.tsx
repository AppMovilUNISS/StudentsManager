import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function EditBibliographyScreen() {
  const [grade, setGrade] = useState('5to');
  const [topic, setTopic] = useState('');
  const [url, setUrl] = useState('');

  const gradeOptions = ['5to', '6to', '7mo', '8vo', '9no', '10mo', '11no', '12mo'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Bibliografía</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Grado</Text>
        <Picker selectedValue={grade} style={styles.picker} onValueChange={(itemValue) => setGrade(itemValue)}>
          {gradeOptions.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>

        <Text style={styles.label}>Tema</Text>
        <TextInput style={styles.input} value={topic} onChangeText={setTopic} />

        <Text style={styles.label}>URL (Opcional)</Text>
        <TextInput style={styles.input} value={url} onChangeText={setUrl} placeholder="https://ejemplo.com" keyboardType="url" />
      </View>

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
}

/* --- ESTILOS --- */
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f4fc', 
    paddingHorizontal: 20, 
    paddingVertical: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#003366', 
    marginBottom: 10, 
    marginTop: 20 
  },
  formContainer: { 
    backgroundColor: '#ffffff', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 10, 
    borderWidth: 1, 
    borderColor: '#ccc' 
  },
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#003366', 
    marginBottom: 5 
  },
  input: { 
    height: 45, 
    borderWidth: 1, 
    borderColor: '#003366', 
    borderRadius: 8, 
    paddingHorizontal: 10, 
    fontSize: 16, 
    backgroundColor: '#fff' 
  },
  picker: { 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#003366', 
    borderRadius: 8, 
    backgroundColor: '#fff',
    marginBottom: 10 
  },
  updateButton: { 
    backgroundColor: '#0077CC', 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 8, 
    alignSelf: 'center', 
    marginTop: 15 
  },
  updateButtonText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
});
