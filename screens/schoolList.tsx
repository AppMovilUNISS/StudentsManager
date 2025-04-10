import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface School {
  id: string;
  name: string;
  address: string;
  phone: string;
}

export default function SchoolListScreen() {
  const [schools, setSchools] = useState<School[]>([
    { id: '1', name: 'Escuela Primaria José Martí', address: 'Calle 23 #456', phone: '555-1234' },
    { id: '2', name: 'Instituto Preuniversitario Máximo Gómez', address: 'Av. Central #789', phone: '555-5678' },
  ]);

  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleAddSchool = () => {
    Alert.alert("Añadir Escuela", "Funcionalidad próximamente.");
  };

  const handleSelectSchool = (id: string) => {
    setSelectedSchools(prev => 
      prev.includes(id) ? prev.filter(schoolId => schoolId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    Alert.alert("Eliminar Escuelas", "¿Seguro que deseas eliminar las escuelas seleccionadas?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Eliminar", style: "destructive", onPress: () => setSchools(schools.filter(school => !selectedSchools.includes(school.id))) }
    ]);
    setSelectedSchools([]);
  };

  const handleEditSelected = () => {
    Alert.alert("Editar Escuelas", "Funcionalidad próximamente.");
  };

  const filteredSchools = schools.filter(school => 
    school.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escuelas</Text>

      {/* Barra de búsqueda por nombre */}
      <TextInput style={styles.searchInput} placeholder="Buscar escuela..." placeholderTextColor="#aaa" value={searchText} onChangeText={setSearchText} />

      {/* Botón para añadir una escuela */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddSchool}>
        <Ionicons name="add-circle-outline" size={40} color="#0077CC" />
      </TouchableOpacity>

      {/* Tabla de Escuelas */}
      <View style={styles.tableHeader}>
        <Text style={styles.columnHeader}>Nombre</Text>
        <Text style={styles.columnHeader}>Dirección</Text>
        <Text style={styles.columnHeader}>Teléfono</Text>
      </View>

      <FlatList
        data={filteredSchools}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.tableRow, selectedSchools.includes(item.id) && styles.selectedRow]} onLongPress={() => handleSelectSchool(item.id)}>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.address}</Text>
            <Text style={styles.tableCell}>{item.phone}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Opciones de edición/eliminación cuando hay escuelas seleccionadas */}
      {selectedSchools.length > 0 && (
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={handleEditSelected}>
            <Text style={styles.actionText}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} onPress={handleDeleteSelected}>
            <Text style={styles.actionText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

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
  searchInput: { 
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
  addButton: { 
    alignSelf: 'flex-end', 
    marginBottom: 15 
  },
  tableHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    backgroundColor: '#0077CC', 
    paddingVertical: 10, 
    paddingHorizontal: 10, 
    borderRadius: 8 
  },
  columnHeader: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
    flex: 1, 
    textAlign: 'center' 
  },
  tableRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    backgroundColor: '#ffffff', 
    paddingVertical: 10, 
    paddingHorizontal: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
    alignItems: 'center' 
  },
  selectedRow: { 
    backgroundColor: '#cce5ff' 
  },
  tableCell: { 
    fontSize: 16, 
    color: '#003366', 
    flex: 1, 
    textAlign: 'center' 
  },
  actionContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 15 
  },
  actionButton: { 
    backgroundColor: '#0077CC', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 8 
  },
  deleteButton: { 
    backgroundColor: '#CC0000' 
  },
  actionText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
});
