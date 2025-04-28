import React, { useState, useEffect } from 'react';
import { Alert, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';

import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LoginScreen from './screens/LoginScreen';
import VerificationScreen from './screens/VerificationScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import FicheDetaillee from './screens/FicheDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ⬇️ Onglets du bas avec header + bouton déconnexion dans Home
function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Rechercher') {
            iconName = focused ? 'search' : 'search-outline';
          }

          return <IconIonicons name={iconName} size={size} color={color} />;
        },
        headerShown: true,
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#666',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Accueil',
          headerRight: () => (
            <IconMaterialIcons
              name="logout"
              size={24}
              color="#333"
              style={{ marginRight: 15 }}
              onPress={() => {
                Alert.alert(
                  "Déconnexion",
                  "Voulez-vous vraiment vous déconnecter ?",
                  [
                    { text: "Annuler", style: "cancel" },
                    {
                      text: "Oui",
                      onPress: () => navigation.navigate('Se connecter'),
                      style: "destructive"
                    }
                  ]
                );
              }}
            />
          ),
        })}
      />
      <Tab.Screen name="Rechercher" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Manrope': require('./assets/fonts/Manrope-VariableFont_wght.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Se connecter"
        screenOptions={{
          animation: 'fade',
          headerShown: false,  // on cache l'entête sur les écrans de stack
        }}
      >
        <Stack.Screen name="Se connecter" component={LoginScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen name="FicheDetail" component={FicheDetaillee} />

        {/* L'écran avec navigation par onglets */}
        <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}