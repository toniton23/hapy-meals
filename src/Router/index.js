import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Welcome,
  Home,
  OfferPage,
  AkunPage,
  Login,
  PasswordPage,
} from '../pages';
import {BurgerPage} from '../pages/MenuPage';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Akun"
        component={AkunPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Offer"
        component={OfferPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Burger"
        component={BurgerPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Password"
        component={PasswordPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
