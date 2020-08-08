import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { LoginScreen, HomeScreen, RegistrationScreen, IngresosScreen, DeudasScreen, PlanesScreen} from './src/screens'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      setUser(null)
    })
  } 
  
  if (loading) {
    return (
      <></>
    )
  }

  function HomeStackNavigation() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'My home' }}>
          {props => <HomeScreen {...props} onPress={signOut} extraData={user}/>}
        </Stack.Screen>
      </Stack.Navigator>
     );
  }
  function IngresosStackNavigation() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Ingresos" options={{ title: 'My Ingresos' }}>
            {props => <IngresosScreen {...props} onPress={signOut} extraData={user}/>}
          </Stack.Screen>
        </Stack.Navigator>
      );
    }
  function DeudasStackNavigation() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Gastos" options={{ title: 'My Deudas' }}>
          {props => <DeudasScreen {...props} onPress={signOut} extraData={user}/>}
        </Stack.Screen>
      </Stack.Navigator>
     );
  }
  function PlanesStackNavigation() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Planes" options={{ title: 'My Planes' }}>
          {props => <PlanesScreen {...props} onPress={signOut} extraData={user}/>}
        </Stack.Screen>
      </Stack.Navigator>
     );
  }
  return (
    <NavigationContainer>
        { user ? (
          <Tab.Navigator initialRouteName={"Home"} 
                screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = 'ios-home'
                  } else if (route.name === 'Ingresos') {
                    iconName = 'ios-card' 
                  } else if (route.name === 'Gastos') {
                    iconName ='ios-cart'
                  } else if (route.name === 'Planes') {
                    iconName = 'ios-clipboard'
                  }
                  return <Icon name={iconName} type='ionicon' size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: '#788eec',
                inactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen
              name="Home"
              component={HomeStackNavigation} />
              <Tab.Screen
              name="Ingresos"
              component={IngresosStackNavigation} />
              <Tab.Screen
              name="Gastos"
              component={DeudasStackNavigation} />
              <Tab.Screen
              name="Planes"
              component={PlanesStackNavigation} />
          </Tab.Navigator>
        ) : (
          <>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} headerMode = "none" />
            <Stack.Screen name="Registration" component={RegistrationScreen} headerMode = "none" />
          </Stack.Navigator>
          </>
        )}
    </NavigationContainer>
  );
}
