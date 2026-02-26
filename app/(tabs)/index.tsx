import { AppShell } from '@/components/AppShell';
import { Sniglet_400Regular, Sniglet_800ExtraBold, useFonts } from '@expo-google-fonts/sniglet';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {

  const [fontsLoaded] = useFonts({
    Sniglet_400Regular,
    Sniglet_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <AppShell />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFAF5",
  },
  background: {
    flex: 1,
  }
})