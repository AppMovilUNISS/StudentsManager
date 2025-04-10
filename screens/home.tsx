import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Oswald_700Bold } from '@expo-google-fonts/oswald';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';

export default function App() {
  const handleShortcutPress = (action: string) => {
    Alert.alert(`Seleccionaste: ${action}`);
  };

  const handleIconPress = (message: string) => {
    Alert.alert(message);
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'No se pudo abrir el enlace');
    });
  };

  const [fontsLoaded] = useFonts({
    Oswald_700Bold,
  });

  const [fontsLoaded1] = useFonts({
    Roboto_500Medium,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  if (!fontsLoaded1) {
    return null; 
  }

  return (
    <View style={styles.container}>
      {/* Encabezado con íconos de usuario y configuración */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>SSpiritMat</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => handleIconPress('Usuario presionado')}>
            <Ionicons name="person-circle-outline" size={32} color="#003366" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('Configuración presionada')}>
            <Ionicons name="settings-outline" size={32} color="#003366" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Barra de herramientas */}
      <View style={styles.toolsBarContainer}>
        <View style={styles.toolsBar}>
          <TouchableOpacity 
            style={styles.toolButton} 
            onPress={() => handleShortcutPress("Añadir nuevo estudiante")}
          >
            <Text style={styles.toolText}>Añadir estu...</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.toolButton} 
            onPress={() => handleShortcutPress("Añadir nueva escuela")}
          >
            <Text style={styles.toolText}>Añadir esc...</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.toolButton} 
            onPress={() => handleShortcutPress("Añadir nuevo examen")}
          >
            <Text style={styles.toolText}>Añadir exa...</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.toolButton} 
            onPress={() => handleShortcutPress("Añadir nueva bibliografía")}
          >
            <Text style={styles.toolText}>Añadir bib...</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botones principales centrados */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => handleShortcutPress("Escuela")}
          >
            <Text style={styles.buttonText}>Escuela</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => handleShortcutPress("Estudiante")}
          >
            <Text style={styles.buttonText}>Estudiante</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => handleShortcutPress("Examen")}
          >
            <Text style={styles.buttonText}>Examen</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => handleShortcutPress("Bibliografía")}
          >
            <Text style={styles.buttonText}>Bibliografía</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pie de página */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 SSpiritMat. Todos los derechos reservados.</Text>
        <Text style={styles.footerText}>Gestión académica eficiente para un mejor aprendizaje.</Text>
        <Text style={styles.footerText}>¿Necesitas ayuda? Contáctanos: soporte@sspiritmat.com</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => openLink('https://www.facebook.com/unissjosemartiperez')}>
            <Ionicons name="logo-facebook" size={28} color="#FFFFFF" style={styles.iconSpacing} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://x.com/UnissJMarti?t=W-P69dvwItznokm5-LSwbw&s=08')}>
            <Ionicons name="logo-twitter" size={28} color="#FFFFFF" style={styles.iconSpacing} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.instagram.com/uniss_josemarti?igsh=MWFzMXA1bXIyNnp0Mg==')}>
            <Ionicons name="logo-instagram" size={28} color="#FFFFFF" style={styles.iconSpacing} />
          </TouchableOpacity>
        </View>
        <Text style={styles.footerVersion}>Versión 1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4fc',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003366',
    fontFamily: 'Oswald_700Bold', 
    },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
  toolsBarContainer: {
    backgroundColor: '#DDEBF7', 
    borderRadius: 5,
    paddingVertical: 10, 
    marginTop: 5,
    elevation: 3,
  },
  toolsBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  toolButton: {
    backgroundColor: '#f0f4fc',
    borderWidth: 1,
    borderColor: '#003366', 
    paddingVertical: 5, 
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  toolText: {
    color: '#003366',
    fontSize: 10, 
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#0077CC', 
    paddingVertical: 30,
    paddingHorizontal: 35,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
    buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
  },
  footer: {
    backgroundColor: '#003366',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 2,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  iconSpacing: {
    marginHorizontal: 8,
  },
  footerVersion: {
    color: '#AAAAAA',
    fontSize: 11,
    marginTop: 5,
  },
});
