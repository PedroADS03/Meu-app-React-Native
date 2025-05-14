import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Jogos from './screens/Jogos';
import Musica from './screens/Musica';
import BemEstar from './screens/BemEstar';
import Ciencia from './screens/Ciencia';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Jogos') iconName = 'game-controller';
            else if (route.name === 'Música') iconName = 'musical-notes';
            else if (route.name === 'Bem-Estar') iconName = 'leaf';
            else if (route.name === 'Ciência') iconName = 'flask';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Jogos" component={Jogos} />
        <Tab.Screen name="Música" component={Musica} />
        <Tab.Screen name="Bem-Estar" component={BemEstar} />
        <Tab.Screen name="Ciência" component={Ciencia} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
