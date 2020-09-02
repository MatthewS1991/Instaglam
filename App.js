
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './src/Screens/HomeScreen';
import CameraScreen from './src/Screens/CameraScreen';



const Stack = createBottomTabNavigator();


export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Camera" component={CameraScreen} />
       </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
