import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Student {
  id: string;
  name: string;
  ci: string;
  grade: string;
  address: string;
  municipality: string;
  phone: string;
}

export default function StudentListScreen() {
  const [students, setStudents] = useState<Student[]>([
    { id: '1', name: 'Juan Pérez', ci: '123456789', grade: '10mo', address: 'Calle 12 #345', municipality: 'Sancti Spíritus', phone: '555-1234' },
    { id: '2', name: 'María Rodríguez', ci: '987654321', grade: '12mo', address: 'Av. Principal #567', municipality: 'Trinidad', phone: '555-5678' },
  ]);

  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleAddStudent = () => {
    Alert.alert("Añadir Estudiante", "Funcionalidad próximamente.");
  };

  const handleSelectStudent = (id: string) => {
    setSelectedStudents(prev =>
      prev.includes(id) ? prev.filter(studentId => studentId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    Alert.alert("Eliminar Estudiantes", "¿Seguro que deseas eliminar los estudiantes seleccionados?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Eliminar", style: "destructive", onPress: () => setStudents(students.filter(student => !selectedStudents.includes(student.id))) }
    ]);
    setSelectedStudents([]);
  };

  const handleEditSelected = () => {
    Alert.alert("Editar Estudiantes", "Funcionalidad próximamente.");
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estudiantes</Text>

      {/* Barra de búsqueda */}
      <TextInput style={styles.searchInput} placeholder="Buscar estudiante..." placeholderTextColor="#aaa" value={searchText} onChangeText={setSearchText} />

      {/* Botón para añadir un estudiante */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddStudent}>
        <Ionicons name="add-circle-outline" size={40} color="#0077CC" />
      </TouchableOpacity>

      {/* Tabla de Estudiantes */}
      <View style={styles.tableHeader}>
        <Text style={styles.columnHeader}>Nombre y Apellido</Text>
        <Text style={styles.columnHeader}>CI</Text>
        <Text style={styles.columnHeader}>Grado</Text>
        <Text style={styles.columnHeader}>Dirección</Text>
        <Text style={styles.columnHeader}>Municipio</Text>
        <Text style={styles.columnHeader}>Teléfono</Text>
      </View>

      <FlatList
        data={filteredStudents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.tableRow, selectedStudents.includes(item.id) && styles.selectedRow]} onLongPress={() => handleSelectStudent(item.id)}>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.ci}</Text>
            <Text style={styles.tableCell}>{item.grade}</Text>
            <Text style={styles.tableCell}>{item.address}</Text>
            <Text style={styles.tableCell}>{item.municipality}</Text>
            <Text style={styles.tableCell}>{item.phone}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Opciones de edición/eliminación cuando hay estudiantes seleccionados */}
      {selectedStudents.length > 0 && (
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
    fontSize: 14, 
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
    fontSize: 14, 
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

