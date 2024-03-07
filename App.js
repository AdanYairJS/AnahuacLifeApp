// import React from "react";
// import Navigation from "./components/Navigation";
// import { StyleSheet, SafeAreaView, Platform } from "react-native";

// export default function App(){
//   return(
//       <Navigation />
//   );
// }
import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import Constants from 'expo-constants';

import Navigation from "./components/Navigation";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, {paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0}]}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});