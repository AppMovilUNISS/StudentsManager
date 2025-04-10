import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddStudentScreen() {
  const [name, setName] = useState('');
  const [idCard, setIdCard] = useState('');
  const [grade, setGrade] = useState('5to'); // Valor inicial
  const [municipality, setMunicipality] = useState('Sancti Spíritus'); // Valor inicial
  const [address, setAddress] = useState('');
  const [landline, setLandline] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSaveStudent = () => {
    if (!name.trim() || !idCard.trim() || !grade.trim() || !municipality.trim() || !address.trim()) {
      Alert.alert("Error", "Por favor, completa todos los campos obligatorios.");
      return;
    }

    Alert.alert("Estudiante guardado", `Nombre: ${name}\nCarnet: ${idCard}\nGrado: ${grade}\nMunicipio: ${municipality}\nDirección: ${address}\nTeléfono Fijo: ${landline || "No registrado"}\nTeléfono Móvil: ${mobile || "No registrado"}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Añadir Estudiante</Text>
      
      <TextInput style={styles.input} placeholder="Nombre y Apellido" placeholderTextColor="#aaa" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Carnet de Identidad" placeholderTextColor="#aaa" value={idCard} onChangeText={setIdCard} keyboardType="numeric" />
      
      <Text style={styles.label}>Grado Escolar</Text>
      <Picker selectedValue={grade} onValueChange={setGrade} style={styles.picker}>
        {["5to", "6to", "7mo", "8vo", "9no", "10mo", "11no", "12mo"].map(level => <Picker.Item key={level} label={level} value={level} />)}
      </Picker>

      <Text style={styles.label}>Municipio</Text>
      <Picker selectedValue={municipality} onValueChange={setMunicipality} style={styles.picker}>
        {["Sancti Spíritus", "Trinidad", "Cabaiguán", "Fomento", "Jatibonico", "Taguasco", "Yaguajay", "La Sierpe"].map(city => <Picker.Item key={city} label={city} value={city} />)}
      </Picker>

      <TextInput style={styles.input} placeholder="Dirección" placeholderTextColor="#aaa" value={address} onChangeText={setAddress} multiline />

      {/* Campos de teléfonos */}
      <TextInput style={styles.input} placeholder="Teléfono Fijo" placeholderTextColor="#aaa" value={landline} onChangeText={setLandline} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Teléfono Móvil" placeholderTextColor="#aaa" value={mobile} onChangeText={setMobile} keyboardType="phone-pad" />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveStudent}>
        <Text style={styles.saveButtonText}>Guardar Estudiante</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4fc',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
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
    width: '100%',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  saveButton: {
    backgroundColor: '#0077CC',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
