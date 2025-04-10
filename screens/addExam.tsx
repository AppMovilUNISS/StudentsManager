import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddExamScreen() {
  const [examName, setExamName] = useState('');
  const [examCategory, setExamCategory] = useState('Uno'); // Valor inicial
  const [examId, setExamId] = useState('');
  const [questionCount, setQuestionCount] = useState('Una'); // Valor inicial
  const [examDate, setExamDate] = useState('');

  const handleSaveExam = () => {
    if (!examName.trim() || !examId.trim() || !examDate.trim()) {
      Alert.alert("Error", "Por favor, completa los campos obligatorios.");
      return;
    }

    Alert.alert("Examen guardado", `Nombre: ${examName}\nCategoría: ${examCategory}\nID Examen: ${examId}\nCantidad de Preguntas: ${questionCount}\nFecha: ${examDate}`);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Añadir Examen</Text>

        {/* Nombre del Examen */}
        <TextInput style={styles.input} placeholder="Nombre del Examen" placeholderTextColor="#aaa" value={examName} onChangeText={setExamName} />

        {/* Categoría */}
        <Text style={styles.label}>Categoría</Text>
        <Picker selectedValue={examCategory} onValueChange={setExamCategory} style={styles.picker}>
          {["Uno", "Dos", "Tres", "Cuatro"].map(category => <Picker.Item key={category} label={category} value={category} />)}
        </Picker>

        {/* ID Examen */}
        <TextInput style={styles.input} placeholder="ID del Examen" placeholderTextColor="#aaa" value={examId} onChangeText={setExamId} keyboardType="numeric" />

        {/* Cantidad de Preguntas */}
        <Text style={styles.label}>Cantidad de Preguntas</Text>
        <Picker selectedValue={questionCount} onValueChange={setQuestionCount} style={styles.picker}>
          {["Una", "Dos", "Tres", "Cuatro", "Cinco"].map(count => <Picker.Item key={count} label={count} value={count} />)}
        </Picker>

        {/* Fecha del Examen */}
        <Text style={styles.label}>Fecha del Examen</Text>
        <TextInput style={styles.input} placeholder="DD/MM/AAAA" placeholderTextColor="#aaa" value={examDate} onChangeText={setExamDate} keyboardType="numeric" />

        {/* Botón para guardar examen */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveExam}>
          <Text style={styles.saveButtonText}>Guardar Examen</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

/* --- ESTILOS --- */
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
