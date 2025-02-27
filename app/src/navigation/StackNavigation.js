import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { AppLoading, GetWords, InputWords, Results, ShowWords, WaitTime } from '../screens/index';
import { routeMap } from '../utils/constants';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routeMap.LOADING} component={AppLoading} />
        <Stack.Screen name={routeMap.REQUEST_WORDS} component={GetWords} />
        <Stack.Screen name={routeMap.WRITE_WORDS} component={InputWords} />
        <Stack.Screen name={routeMap.SHOW_RESULTS} component={Results} />
        <Stack.Screen name={routeMap.SHOW_WORDS} component={ShowWords} />
        <Stack.Screen name={routeMap.WAIT} component={WaitTime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
