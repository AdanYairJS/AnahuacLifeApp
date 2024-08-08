import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import Constants from 'expo-constants';
import Navigation from "./components/Navigation";
import * as Font from 'expo-font';
import { EventRegister } from "react-native-event-listeners";
import theme from "./components/theme/theme";
import themeContext from "./components/theme/themeContext";

const fetchFonts = () => {
  return Font.loadAsync({
    'lexend-thin': require('./fonts/Lexend/static/Lexend-Thin.ttf'),
    'lexend-extralight': require('./fonts/Lexend/static/Lexend-ExtraLight.ttf'),
    'lexend-light': require('./fonts/Lexend/static/Lexend-Light.ttf'),
    'lexend-regular': require('./fonts/Lexend/static/Lexend-Regular.ttf'),
    'lexend-medium': require('./fonts/Lexend/static/Lexend-Medium.ttf'),
    'lexend-semibold': require('./fonts/Lexend/static/Lexend-SemiBold.ttf'),
    'lexend-bold': require('./fonts/Lexend/static/Lexend-Bold.ttf'),
    'lexend-extrabold': require('./fonts/Lexend/static/Lexend-ExtraBold.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [darkMode,setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)
      //console.log(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  },[darkMode])

  useEffect(() => {
    const loadFonts = async () => {
      await fetchFonts();
      setDataLoaded(true);
    };

    loadFonts();
  }, []);

  if (!dataLoaded) {
    return null; // Pantalla de carga?
  }

  return (
      <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
        <Navigation/>
      </themeContext.Provider>
    // <SafeAreaView style={[styles.container, {paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : -Constants.statusBarHeight}]}>
    //   <Navigation/>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // height: Constants.height,
  },
});