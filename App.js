import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListaCursos from './pages/ListaCursos';
import ListaEstudiantes from './pages/ListaEstudiantes';
import Inicio from './pages/Inicio';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="ListaCursos" component={ListaCursos} />
        <Drawer.Screen name="ListaEstudiantes" component={ListaEstudiantes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}