import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ModalPortal } from 'react-native-modals';
import StackNavigation from './StackNavigation';

export default function App() {
    return (
      <>
      <StackNavigation/>
      <ModalPortal />
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});