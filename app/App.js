import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigator } from './src/navigation/StackNavigation';
import { ToastProvider } from 'react-native-toast-notifications';

export default function GetWords() {
  // TODO remove this in the future
  AsyncStorage.clear();

  return (
    <ToastProvider>
      <StackNavigator />
    </ToastProvider>
  );
}
