import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function ListaEstudiantes({ navigation }) {
  const [estudiantes, setEstudiantes] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/getPersonas')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setEstudiantes(data);
        } else {
          throw new Error('La respuesta no es un arreglo válido.');
        }
      })
      .catch((error) => {
        console.error('Error de solicitud:', error);
      });
  }, []);

  const filteredEstudiantes = estudiantes.filter((estudiante) =>
    estudiante.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View>
      <Text>Lista de Estudiantes:</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer(); 
        }}
      >
        <Text>Mostrar Menú</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Buscar estudiante..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredEstudiantes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // Navegar a la pantalla de cursos asociados a este estudiante
              navigation.navigate('CursosDelEstudiante', { studentId: item.id });
            }}
          >
            <Text>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default ListaEstudiantes;
