import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListaCursos from './pages/ListaCursos';
import ListaEstudiantes from './pages/ListaEstudiantes';
import Inicio from './pages/Inicio';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="ListaCursos" component={ListaCursos} />
        <Drawer.Screen name="ListaEstudiantes" component={ListaEstudiantes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
