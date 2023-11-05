import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchBar from '../components/searchBar';

const Drawer = createDrawerNavigator();

function ListaEstudiantes({ navigation }) {
  const [listPrincipal, setListaPrincipal] = useState([]);
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
      if (Array.isArray(data.data)) {
        const estudiantes =[];
        [...data.data].forEach(item=>{
          const result = estudiantes.filter(estudiante=>estudiante.nombre==item.nombre);
          if(result.length==0){
            estudiantes.push(item);
          }
        });
        setEstudiantes(estudiantes);
        setListaPrincipal(data.data);
      } else {
        throw new Error('Respuesta no es un array');
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
    <View style={styles.container}>

      <SearchBar searchText={searchText} setSearchText={setSearchText}/>


      <Text style={styles.textH1}>Lista de Estudiantes:</Text>
    

      <FlatList
        data={filteredEstudiantes}
        keyExtractor={(item) => item.nombre.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CursosDelEstudiante', { studentName: listPrincipal.filter(i=>i.nombre==item.nombre)});
            }}
          >
            <Text style={styles.item}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      />

      
    </View>
  );
}

export default ListaEstudiantes;

const styles = StyleSheet.create({
  container:{
    margin:15
  },
  item:{
    backgroundColor: "#9DC4FF",
    padding: 15,
    marginVertical: 6,
    marginHorizontal: 14,
    fontSize: 15, 
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