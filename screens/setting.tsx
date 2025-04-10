import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);

  const handleLanguagePress = () => {
    Alert.alert('Idioma', 'Por el momento, solo está disponible Español.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>

      {/* Notificaciones */}
      <View style={styles.settingRow}>
        <Ionicons name="notifications-outline" size={24} color="#003366" />
        <Text style={styles.settingText}>Notificaciones</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      {/* Gestión de cuenta */}
      <TouchableOpacity style={styles.settingRow} onPress={() => Alert.alert('Gestión de cuenta')}>
        <Ionicons name="person-outline" size={24} color="#003366" />
        <Text style={styles.settingText}>Cuenta</Text>
      </TouchableOpacity>

      {/* Cambiar idioma */}
      <TouchableOpacity style={styles.settingRow} onPress={handleLanguagePress}>
        <Ionicons name="globe-outline" size={24} color="#003366" />
        <Text style={styles.settingText}>Idioma</Text>
      </TouchableOpacity>

      {/* Acerca de Nosotros */}
      <TouchableOpacity style={styles.settingRow} onPress={() => Alert.alert('Acerca de Nosotros', 'SSpiritMat es una app dedicada a la gestión académica eficiente.')}>
        <Ionicons name="information-circle-outline" size={24} color="#003366" />
        <Text style={styles.settingText}>Acerca de Nosotros</Text>
      </TouchableOpacity>

      {/* Cerrar sesión */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => Alert.alert('Cierre de sesión')}>
        <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4fc',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  settingText: {
    flex: 1,
    fontSize: 18,
    color: '#003366',
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#CC0000', // Color rojo para destacar el cierre de sesión
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  logoutButtonText: {
    color: '#FFFFFF', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
