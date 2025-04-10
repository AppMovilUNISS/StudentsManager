import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Bibliography {
  id: string;
  topic: string;
  grade: string;
  url?: string;
}

export default function BibliographyListScreen() {
  const [bibliographies, setBibliographies] = useState<Bibliography[]>([
    { id: '1', topic: 'Matemáticas Avanzadas', grade: '10mo', url: 'https://example.com/matematicas.pdf' },
    { id: '2', topic: 'Historia Universal', grade: '12mo', url: '' },
  ]);

  const [selectedBibliographies, setSelectedBibliographies] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleAddBibliography = () => {
    Alert.alert("Añadir Bibliografía", "Funcionalidad próximamente.");
  };

  const handleSelectBibliography = (id: string) => {
    setSelectedBibliographies(prev => 
      prev.includes(id) ? prev.filter(biblioId => biblioId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    Alert.alert("Eliminar Bibliografías", "¿Seguro que deseas eliminar las bibliografías seleccionadas?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Eliminar", style: "destructive", onPress: () => setBibliographies(bibliographies.filter(biblio => !selectedBibliographies.includes(biblio.id))) }
    ]);
    setSelectedBibliographies([]);
  };

  const handleEditSelected = () => {
    Alert.alert("Editar Bibliografías", "Funcionalidad próximamente.");
  };

  const handleDownload = (url?: string) => {
    if (!url) {
      Alert.alert("Descarga no disponible", "Esta bibliografía no tiene un archivo para descargar.");
      return;
    }
    Alert.alert("Descargando", "Redirigiendo a la URL para la descarga...");
  };

  const filteredBibliographies = bibliographies.filter(biblio => 
    biblio.topic.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bibliografías</Text>

      {/* Barra de búsqueda */}
      <TextInput style={styles.searchInput} placeholder="Buscar bibliografía..." placeholderTextColor="#aaa" value={searchText} onChangeText={setSearchText} />

      {/* Botón para añadir una bibliografía */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddBibliography}>
        <Ionicons name="add-circle-outline" size={40} color="#0077CC" />
      </TouchableOpacity>

      {/* Tabla de Bibliografías */}
      <View style={styles.tableHeader}>
        <Text style={styles.columnHeader}>Tema</Text>
        <Text style={styles.columnHeader}>Grado</Text>
        <Text style={styles.columnHeader}>URL</Text>
        <Text style={styles.columnHeader}>Descargar</Text>
      </View>

      <FlatList
        data={filteredBibliographies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.tableRow, selectedBibliographies.includes(item.id) && styles.selectedRow]} onLongPress={() => handleSelectBibliography(item.id)}>
            <Text style={styles.tableCell}>{item.topic}</Text>
            <Text style={styles.tableCell}>{item.grade}</Text>
            <Text style={styles.tableCell}>{item.url ? item.url : "No disponible"}</Text>
            <TouchableOpacity onPress={() => handleDownload(item.url)}>
              <Text style={styles.downloadLink}>{item.url ? "Descargar" : "No disponible"}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      {/* Opciones de edición/eliminación cuando hay bibliografías seleccionadas */}
      {selectedBibliographies.length > 0 && (
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
  downloadLink: { 
    fontSize: 14, 
    color: '#0077CC', 
    textDecorationLine: 'underline' 
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

