import React from 'react';
import { View, Text, Button } from 'react-native';
import InicioButton from "../components/InicioButton";


export default function Inicio({ navigation }) {
  return (
    <View>
      <InicioButton
        onPress={() => navigation.navigate('ListaCursos')}
        title="Lista de Cursos"
      />
     <InicioButton
        onPress={() => navigation.navigate('ListaEstudiantes')}
        title="Lista de Estudiantes"
     />
    </View>
  );
}