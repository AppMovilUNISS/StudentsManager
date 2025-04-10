import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function EditStudentScreen() {
  const [name, setName] = useState('');
  const [ci, setCi] = useState('');
  const [grade, setGrade] = useState('5to');
  const [address, setAddress] = useState('');
  const [municipality, setMunicipality] = useState('Sancti Spíritus');
  const [phone, setPhone] = useState('');

  const gradeOptions = ['5to', '6to', '7mo', '8vo', '9no', '10mo', '11no', '12mo'];
  const municipalityOptions = [
    'Sancti Spíritus', 'Cabaiguán', 'Fomento', 'Jatibonico', 'La Sierpe', 'Taguasco', 'Trinidad', 'Yaguajay'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Estudiante</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>CI</Text>
        <TextInput style={styles.input} value={ci} onChangeText={setCi} />

        <Text style={styles.label}>Grado</Text>
        <Picker selectedValue={grade} style={styles.picker} onValueChange={(itemValue) => setGrade(itemValue)}>
          {gradeOptions.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>

        <Text style={styles.label}>Dirección</Text>
        <TextInput style={styles.input} value={address} onChangeText={setAddress} />

        <Text style={styles.label}>Municipio</Text>
        <Picker selectedValue={municipality} style={styles.picker} onValueChange={(itemValue) => setMunicipality(itemValue)}>
          {municipalityOptions.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>

        <Text style={styles.label}>Teléfono</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} />
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
    marginTop: 15 
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
