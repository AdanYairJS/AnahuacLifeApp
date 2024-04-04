import { StyleSheet, ScrollView } from 'react-native';

import DirectoryDepartments from './directory_components/DirectoryDepartments';

const DirectoryScreen = () => {
  return (
    <ScrollView style={styles.scroll}>
      <DirectoryDepartments id_menu={'Desayunos'}/>
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingTop: 20,
  },
});

export default DirectoryScreen;