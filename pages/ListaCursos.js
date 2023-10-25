import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchBar from '../components/searchBar';

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
        if (Array.isArray(data.data)) {
          setCursos(data.data);
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
    <View style={styles.container}>

      <SearchBar searchText={searchText} setSearchText={setSearchText}/>
      {/* <TextInput
        placeholder="Buscar curso..."
        value={searchText}
        onChangeText={setSearchText}
      /> */}
      <FlatList
        data={filteredCursos}
        keyExtractor={(item) => item.cod.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EstudiantesDelCurso', { courseId: item.cod });
            }}
          >
            <Text>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.textH1}>Lista de Cursos:</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        <Text style={styles.textH2}>Mostrar Menú</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListaCursos;

const styles = StyleSheet.create({
  container:{
    margin:15
  },
  textH1:{
    fontWeight: "bold",
    fontSize: 20
  },
  textH2:{
    fontWeight: "bold",
    fontSize: 16
  }
})