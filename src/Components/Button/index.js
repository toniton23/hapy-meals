import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.wrapper.button} onPress={onPress}>
        <Text style={styles.wrapper.textbutton}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const ActionButton = ({onPress}) => {
  return (
    <View>
      <Button onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {
    button: {
      marginTop: 20,
      marginHorizontal: '25%',
      height: 50,
      width: '50%',
      backgroundColor: '#5c9eb7',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textbutton: {
      fontSize: 25,
      flex: 1,
      color: 'white',
      marginTop: 5,
    },
  },
};
export default ActionButton;
