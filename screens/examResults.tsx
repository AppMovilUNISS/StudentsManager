import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StudentResult {
  id: string;
  name: string;
  finalGrade: number;
  questionScores: number[];
  school: string;
}

export default function ExamResultsScreen() {
  const [results, setResults] = useState<StudentResult[]>([
    { id: '1', name: 'Juan Pérez', finalGrade: 85, questionScores: [20, 15, 25, 25], school: 'Escuela Primaria José Martí' },
    { id: '2', name: 'María Rodríguez', finalGrade: 92, questionScores: [25, 20, 22, 25], school: 'Instituto Preuniversitario Máximo Gómez' },
  ]);

  const [searchText, setSearchText] = useState('');
  const [schoolFilter, setSchoolFilter] = useState('');
  const [sortAscending, setSortAscending] = useState(true);

  const handleSortResults = () => {
    const sortedResults = [...results].sort((a, b) => 
      sortAscending ? a.finalGrade - b.finalGrade : b.finalGrade - a.finalGrade
    );
    setResults(sortedResults);
    setSortAscending(!sortAscending);
  };

  const filteredResults = results.filter(student =>
    (searchText ? student.name.toLowerCase().includes(searchText.toLowerCase()) : true) &&
    (schoolFilter ? student.school.toLowerCase().includes(schoolFilter.toLowerCase()) : true)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados del Examen</Text>

      {/* Barra de búsqueda por estudiante */}
      <TextInput style={styles.searchInput} placeholder="Buscar estudiante..." placeholderTextColor="#aaa" value={searchText} onChangeText={setSearchText} />

      {/* Barra de búsqueda por escuela */}
      <TextInput style={styles.searchInput} placeholder="Buscar por escuela..." placeholderTextColor="#aaa" value={schoolFilter} onChangeText={setSchoolFilter} />

      {/* Botón para ordenar por nota */}
      <TouchableOpacity style={styles.filterButton} onPress={handleSortResults}>
        <Ionicons name="filter-outline" size={32} color="#0077CC" />
      </TouchableOpacity>

      {/* Tabla de resultados */}
      <View style={styles.tableHeader}>
        <Text style={styles.columnHeader}>Nombre</Text>
        <Text style={styles.columnHeader}>Nota Final</Text>
        <Text style={styles.columnHeader}>Notas por Pregunta</Text>
        <Text style={styles.columnHeader}>Escuela</Text>
      </View>

      <FlatList
        data={filteredResults}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.finalGrade}</Text>
            <Text style={styles.tableCell}>{item.questionScores.join(", ")}</Text>
            <Text style={styles.tableCell}>{item.school}</Text>
          </View>
        )}
      />
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
  filterButton: { 
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
  tableCell: { 
    fontSize: 14, 
    color: '#003366', 
    flex: 1, 
    textAlign: 'center' 
  },
});
