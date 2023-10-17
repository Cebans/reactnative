// Navigation.js
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaCursos from './ListaCursos';
import ListaEstudiantes from './ListaEstudiantes';
import Inicio from '../Inicio';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="ListaCursos" component={ListaCursos} />
        <Stack.Screen name="ListaEstudiantes" component={ListaEstudiantes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default createAppContainer(AppNavigator);
