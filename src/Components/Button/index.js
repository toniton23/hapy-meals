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
      marginHorizontal: 100,
      height: 50,
      width: '50%',
      backgroundColor: '#5c9eb7',
      borderRadius: 25,
      flexWrap: 'wrap',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textbutton: {
      fontSize: 30,
      flex: 1,
      marginLeft: 50,
      color: 'white',
      position: 'absolute',
    },
  },
};
export default ActionButton;
