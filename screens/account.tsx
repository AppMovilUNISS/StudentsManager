import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function AccountScreen() {
  const [profilePicture, setProfilePicture] = useState<string | null>(null); // Inicialmente sin imagen

  const handleChangeProfilePicture = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Mantener proporción cuadrada
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setProfilePicture(result.assets[0].uri); // Actualizar imagen de perfil
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo cargar la imagen.");
    }
  };

  const handleDeleteProfile = () => {
    Alert.alert(
      "Eliminar Perfil",
      "¿Estás seguro de que deseas eliminar tu perfil? Esta acción no se puede deshacer.",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", style: "destructive", onPress: () => Alert.alert("Perfil eliminado") },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Contenedor sin borde (transparente) */}
      <View style={styles.profileWrapper}>
        <TouchableOpacity onPress={handleChangeProfilePicture} style={styles.profileContainer}>
          {profilePicture ? (
            <Image source={{ uri: profilePicture }} style={styles.profileImage} />
          ) : (
            <Ionicons name="person-circle-outline" size={100} color="#003366" />
          )}
          <View style={styles.cameraIconContainer}>
            <Ionicons name="camera-outline" size={28} color="#FFFFFF" style={styles.cameraIcon} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Información del usuario */}
      <Text style={styles.name}>Juan Pérez</Text>
      <Text style={styles.email}>juanperez@example.com</Text>
      <Text style={styles.registeredDate}>Registrado el: 01/01/2024</Text>

      {/* Botón para editar perfil */}
      <TouchableOpacity style={styles.editButton} onPress={() => Alert.alert("Editar Perfil", "Funcionalidad próximamente.")}>
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* Botón para cambiar contraseña */}
      <TouchableOpacity style={styles.changePasswordButton} onPress={() => Alert.alert("Cambiar Contraseña", "Funcionalidad próximamente.")}>
        <Text style={styles.changePasswordText}>Cambiar Contraseña</Text>
      </TouchableOpacity>

      {/* Botón para eliminar perfil */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteProfile}>
        <Text style={styles.deleteButtonText}>Eliminar Perfil</Text>
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
  profileWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  profileContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: -5,
    right: 0,
    backgroundColor: '#0077CC',
    padding: 5,
    borderRadius: 50,
  },
  cameraIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#003366',
    marginBottom: 5,
  },
  registeredDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#0077CC', // Azul igual para Editar Perfil y Cambiar Contraseña
    paddingVertical: 12,
    paddingHorizontal: 68,
    borderRadius: 8,
    marginBottom: 10,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  changePasswordButton: {
    backgroundColor: '#0077CC', // Ahora igual al botón de Editar Perfil
    paddingVertical: 12, // Mismo tamaño
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
  },
  changePasswordText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#DD0000', // Rojo para eliminar perfil
    paddingVertical: 12, // Mantiene el tamaño de los otros botones
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
