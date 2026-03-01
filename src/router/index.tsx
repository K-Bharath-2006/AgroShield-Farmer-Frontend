import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../views/login';
import EntranceScreen from '../views/entranceScreen';
import SplashScreen from '../views/splashScreen';
import RegistrationScreen from '../views/Registeration';
import HomepageScreen from '../views/home';
import CropRegisterScreen from '../views/crop-register';
import MyCropsScreen from '../views/my-crops';
import CropDetailsScreen from '../views/crop-details';
import RaiseClaimScreen from '../views/raise-claim';
import MyClaimsScreen from '../views/my-claims';
import ClaimDetailssScreen from '../views/claim-details';
import SchemeDetailsScreen from '../views/scheme-details';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

function RouterApp() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Login}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Entrance}
        component={EntranceScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Splash}
        component={SplashScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Registration}
        component={RegistrationScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Home}
        component={HomepageScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.CropRegister}
        component={CropRegisterScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.MyCrops}
        component={MyCropsScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.CropDetails}
        component={CropDetailsScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.RaiseClaim}
        component={RaiseClaimScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.MyClaims}
        component={MyClaimsScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.ClaimDetails}
        component={ClaimDetailssScreen}
      />
       <Stack.Screen
        options={{headerShown: false}}
        name={routes.SchemeDetails}
        component={SchemeDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default RouterApp;
