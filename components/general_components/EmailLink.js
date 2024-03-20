import React from 'react';
import { Text, Linking } from 'react-native';

const EmailLink = ({ email, children }) => {
  const handlePress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <Text style={{ color: '#4682b4', textDecorationLine: 'underline' }} onPress={handlePress}>
      {children}
    </Text>
  );
};

export default EmailLink;