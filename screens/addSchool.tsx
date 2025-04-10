import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

export default function AddSchoolScreen() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSaveSchool = () => {
    if (!name.trim() || !address.trim()) {
      Alert.alert("Error", "Por favor, completa todos los campos obligatorios.");
      return;
    }

    Alert.alert("Escuela guardada", `Nombre: ${name}\nDirección: ${address}\nTeléfono: ${phone || "No registrado"}`);
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Añadir Escuela</Text>

        {/* Campo de Nombre */}
        <TextInput style={styles.input} placeholder="Nombre de la Escuela" placeholderTextColor="#aaa" value={name} onChangeText={setName} />

        {/* Dirección */}
        <TextInput style={styles.input} placeholder="Dirección" placeholderTextColor="#aaa" value={address} onChangeText={setAddress} multiline />

        {/* Teléfono */}
        <TextInput style={styles.input} placeholder="Teléfono" placeholderTextColor="#aaa" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

        {/* Botón para guardar escuela */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveSchool}>
          <Text style={styles.saveButtonText}>Guardar Escuela</Text>
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
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#003366', 
    alignSelf: 'flex-start', 
    marginBottom: 5 
  },
  phoneRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10 
  },
  phoneInput: { 
    flex: 1, 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#003366', 
    borderRadius: 8, 
    paddingHorizontal: 10, 
    fontSize: 16, 
    backgroundColor: '#fff' 
  },
  addPhoneButton: { 
    backgroundColor: '#0077CC', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 8, 
    marginBottom: 10 
  },
  addPhoneButtonText: { 
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
