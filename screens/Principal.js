import React, { useState } from "react";
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import Matches from './Matches';
import Tabela from './Tabela';
const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        
        
        
      }}
      
      
    >
      <Tab.Screen
        name="Noticias"
        component={Home}
        options={{
          tabBarLabel: 'Noticias',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper" color={'blue'} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Jogos"
        component={Matches}
        options={{
          tabBarLabel: 'Jogos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="soccer" color={'black'} size={size} />
          ),
          tabBarBadge: 4,
        }}
      />
      <Tab.Screen
        name="Classificação"
        component={Tabela}
        options={{
          tabBarLabel: 'Ranking',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="trophy" color={'blue'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}