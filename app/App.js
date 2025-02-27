import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigator } from './src/navigation/StackNavigation';

export default function GetWords() {
  // TODO remove this in the future
  AsyncStorage.clear();

  return (
    <StackNavigator />
  );
}
