import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Exam {
  id: string;
  name: string;
  category: string;
  questionCount: string;
  date: string; // Nueva columna
}

export default function ExamListScreen() {
  const [exams, setExams] = useState<Exam[]>([
    { id: '1', name: 'Examen de Matemáticas Avanzadas', category: 'Uno', questionCount: '5', date: '01/04/2025' },
    { id: '2', name: 'Evaluación de Historia Universal', category: 'Dos', questionCount: '3', date: '02/04/2025' },
  ]);

  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleAddExam = () => {
    Alert.alert("Añadir Examen", "Funcionalidad próximamente.");
  };

  const handleSelectExam = (id: string) => {
    setSelectedExams(prev => 
      prev.includes(id) ? prev.filter(examId => examId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    Alert.alert("Eliminar Exámenes", "¿Seguro que deseas eliminar los exámenes seleccionados?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Eliminar", style: "destructive", onPress: () => setExams(exams.filter(exam => !selectedExams.includes(exam.id))) }
    ]);
    setSelectedExams([]);
  };

  const handleEditSelected = () => {
    Alert.alert("Editar Exámenes", "Funcionalidad próximamente.");
  };

  const filteredExams = exams.filter(exam => 
    exam.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exámenes</Text>

      {/* Barra de búsqueda */}
      <TextInput style={styles.searchInput} placeholder="Buscar examen..." placeholderTextColor="#aaa" value={searchText} onChangeText={setSearchText} />

      {/* Botón para añadir un examen */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddExam}>
        <Ionicons name="add-circle-outline" size={40} color="#0077CC" />
      </TouchableOpacity>

      {/* Tabla de Exámenes */}
      <View style={styles.tableHeader}>
        <Text style={styles.columnHeader}>Nombre</Text>
        <Text style={styles.columnHeader}>Categoría</Text>
        <Text style={styles.columnHeader}>#Pregunta</Text>
        <Text style={styles.columnHeader}>ID</Text>
        <Text style={styles.columnHeader}>Fecha</Text> {/* Nueva columna */}
      </View>

      <FlatList
        data={filteredExams}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.tableRow, selectedExams.includes(item.id) && styles.selectedRow]} onLongPress={() => handleSelectExam(item.id)}>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.category}</Text>
            <Text style={styles.tableCell}>{item.questionCount}</Text>
            <Text style={styles.tableCell}>{item.id}</Text>
            <Text style={styles.tableCell}>{item.date}</Text> {/* Nueva columna */}
          </TouchableOpacity>
        )}
      />

      {/* Opciones de edición/eliminación cuando hay exámenes seleccionados */}
      {selectedExams.length > 0 && (
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
