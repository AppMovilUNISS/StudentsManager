import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddBibliographyScreen() {
  const [grade, setGrade] = useState('5to'); // Valor inicial
  const [topic, setTopic] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);

  const handleUploadFile = () => {
    Alert.alert("Subir Archivo", "Funcionalidad próximamente.");
  };

  const handleSaveBibliography = () => {
    if (!topic.trim()) {
      Alert.alert("Error", "Por favor, ingresa un tema.");
      return;
    }

    Alert.alert("Bibliografía guardada", `Grado: ${grade}\nTema: ${topic}\nURL: ${url || "No registrado"}\nArchivo: ${file ? "Subido" : "No registrado"}`);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Añadir Bibliografía</Text>

        {/* Grado Escolar */}
        <Text style={styles.label}>Grado Escolar</Text>
        <Picker selectedValue={grade} onValueChange={setGrade} style={styles.picker}>
          {["5to", "6to", "7mo", "8vo", "9no", "10mo", "11no", "12mo"].map(level => <Picker.Item key={level} label={level} value={level} />)}
        </Picker>

        {/* Tema de la Bibliografía */}
        <TextInput style={styles.input} placeholder="Tema de la Bibliografía" placeholderTextColor="#aaa" value={topic} onChangeText={setTopic} />

        {/* URL opcional */}
        <TextInput style={styles.input} placeholder="URL (Opcional)" placeholderTextColor="#aaa" value={url} onChangeText={setUrl} keyboardType="url" autoCapitalize="none" />

        {/* Subir archivo opcional */}
        <TouchableOpacity style={styles.uploadButton} onPress={handleUploadFile}>
          <Text style={styles.uploadButtonText}>Subir Archivo</Text>
        </TouchableOpacity>

        {/* Botón para guardar bibliografía */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveBibliography}>
          <Text style={styles.saveButtonText}>Guardar Bibliografía</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f4fc', 
    paddingHorizontal: 20 
  },
  scrollView: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 40 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#003366', 
    marginBottom: 20 
  },
  input: { 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#003366', 
    borderRadius: 8, 
    paddingHorizontal: 15, 
    fontSize: 16, 
    marginBottom: 15, 
    backgroundColor: '#fff', 
    width: '100%' 
  },
  picker: { 
    height: 50, 
    width: '100%', 
    backgroundColor: '#fff', 
    marginBottom: 15 
  },
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#003366', 
    alignSelf: 'flex-start', 
    marginBottom: 5 
  },
  uploadButton: { 
    backgroundColor: '#0077CC', 
    paddingVertical: 10, 
    paddingHorizontal: 65, 
    borderRadius: 8, 
    marginBottom: 10 
  },
  uploadButtonText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  saveButton: { 
    backgroundColor: '#0077CC', 
    paddingVertical: 12, 
    paddingHorizontal: 30, 
    borderRadius: 8, 
    marginTop: 10 
  },
  saveButtonText: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});
