import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogingScrenns from '../screnns/LogingScrenns';
import WelcomeScrenns from '../screnns/WelcomeScrenns';
import RegistroScreen from '../screnns/RegistroScrenns';
import GaleriaScreens from '../screnns/GaleriaScreens';
import CamaraScrenns from '../screnns/CamaraScrenns';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Loging" component={LogingScrenns} />
      <Stack.Screen name= "Registro" component={RegistroScreen}/> 
      <Stack.Screen name="Welcome" component={MyTabs} />
    </Stack.Navigator>
  );
}

function MyTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScrenns}/>
      <Tab.Screen name="Galeria" component={GaleriaScreens}/>
      <Tab.Screen name="Camara" component={CamaraScrenns}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
