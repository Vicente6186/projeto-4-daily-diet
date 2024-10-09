import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import Loading from '@screens/Loading';
import { theme } from './src/theme';
import { ThemeProvider } from 'styled-components/native';

export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

 return (
  <ThemeProvider theme={theme}>
    {fontsLoaded ? <Routes /> : <Loading />}
  </ThemeProvider>
 )
}