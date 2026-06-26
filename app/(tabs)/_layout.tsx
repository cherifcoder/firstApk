import { useColorScheme } from '@/hooks/use-color-scheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import React from 'react';
import * as theme from '@/constants/theme';
export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
   <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#1976D2',
    tabBarInactiveTintColor: '#3280fe',
    tabBarStyle: {
      paddingVertical:15,
      backgroundColor: '#ffffff',
      shadowOffset:{width:0, height:10},
      borderTopWidth: 0,
      height: 55,
      shadowRadius: 7,
      elevation: 2, // ✅ ombre Android
      shadowOpacity:0.1,
      width:'90%',
      borderRadius:50,
      position:'absolute',
      marginHorizontal:'5%',
      bottom:'2%'
    },
    tabBarLabelStyle: {
      fontSize:12,
      fontWeight: 'bold',
    },
    tabBarIconStyle: {
      alignSelf:'center',
      justifyContent:'center',
      marginBottom:2,
      alignItems:'center',
      marginVertical:0
    },
    headerShown: false,
  }}
>
  <Tabs.Screen
    name="index"
    options={{
      title: 'Accueil',
      tabBarIcon: ({ color }) => <AntDesign name="home"  size={theme.Size.iconSize} color={color} />,
    }}
  />
  
  <Tabs.Screen
    name="explore"
    options={{
      title: 'Nouvelle commande',
      tabBarIcon: ({ color }) => <Entypo name="circle-with-plus" size={theme.Size.iconSize} color={color} />,
    }}
  />
  <Tabs.Screen
    name="profil"
    options={{
      title: 'Historique',
      tabBarIcon: ({ color }) => <FontAwesome5 name="clipboard-list" size={theme.Size.iconSize} color={color} />,
    }}
  />
</Tabs>

  );
}
