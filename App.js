import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen"
import { SafeArea } from "./src/features/restaurants/components/SafeArea"

import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'

import {
  useFonts,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import { Lato_400Regular } from '@expo-google-fonts/lato'
import { Ionicons } from '@expo/vector-icons'

const Settings = () => <SafeArea><Text>Setting</Text></SafeArea>
const Map = () => <SafeArea><Text>Map</Text></SafeArea>

export default function App() {
  const [oswaldLoaded] = useFonts({ Oswald_400Regular })
  const [latoLoaded] = useFonts({ Lato_400Regular })

  const Tab = createBottomTabNavigator()

  if (!latoLoaded || !oswaldLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName

                if (route.name === 'Restaurants') {
                  iconName = 'md-restaurant'
                } else if (route.name === 'Settings') {
                  iconName = 'md-settings'
                } else if (route.name === 'Map') {
                  iconName = 'md-map'
                }

                return <Ionicons name={iconName} size={size} color={color} />
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>

      </ThemeProvider>
    </>
  )
}


