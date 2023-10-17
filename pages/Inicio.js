import React from 'react';
import { View, Text, Button } from 'react-native';

function Inicio({ navigation }) {
  return (
    <View>
      <Text>Página de Inicio</Text>
      <Button
        title="Lista de Cursos"
        onPress={() => navigation.navigate('ListaCursos')}
      />
      <Button
        title="Lista de Estudiantes"
        onPress={() => navigation.navigate('ListaEstudiantes')}
      />
    </View>
  );
}

export default Inicio;