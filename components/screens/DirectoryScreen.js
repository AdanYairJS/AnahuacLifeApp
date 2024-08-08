import React, {useContext} from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import themeContext from '../theme/themeContext';

import DirectoryDepartments from './directory_components/DirectoryDepartments';

const DirectoryScreen = () => {
  const theme = useContext(themeContext);
  
  const styles = StyleSheet.create({
    scroll: {
      paddingTop: 20,
      backgroundColor: theme.backgroundColor,
    },
  });
  
  return (
    <ScrollView style={styles.scroll}>
      <DirectoryDepartments id_menu={'Desayunos'}/>
    </ScrollView> 
  );
};

export default DirectoryScreen;