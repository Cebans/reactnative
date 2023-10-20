import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function ListaCursos({ navigation }) {
  const [cursos, setCursos] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/getCursos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          throw new Error('Respuesta no es un array');
        }
      })
      .catch((error) => {
        console.error('Error de solicitud:', error);
      });
  }, []);

  const filteredCursos = cursos.filter((curso) =>
    curso.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View>
      <Text>Lista de Cursos:</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        <Text>Mostrar Menú</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Buscar curso..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredCursos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EstudiantesDelCurso', { courseId: item.id });
            }}
          >
            <Text>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default ListaCursos;