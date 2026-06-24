import { Tabs } from 'expo-router';
import React from 'react';  
import AntDesign from '@expo/vector-icons/AntDesign';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
   <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#FF5722',
    tabBarInactiveTintColor: '#9E9E9E',
    tabBarStyle: {
      backgroundColor: '#f9f9f9',
      borderTopWidth: 2,
      borderTopColor: '#FF5722',
      height: 70,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    tabBarIconStyle: {
      marginBottom: -2,
    },
    headerShown: false,
  }}
>
  <Tabs.Screen
    name="index"
    options={{
      title: 'Accueil',
      tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
    }}
  />
  
  <Tabs.Screen
    name="explore"
    options={{
      title: 'explore',
      tabBarIcon: ({ color }) => <AntDesign name="setting" size={24} color={color} />,
    }}
  />
  <Tabs.Screen
    name="profil"
    options={{
      title: 'Profil',
      tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
    }}
  />
</Tabs>

  );
}
