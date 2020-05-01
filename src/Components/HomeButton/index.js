import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {Home} from '../../Utils/Asets';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Home} style={{height: 30, width: 30}} />
        <Text style={{fontWeight: 'bold'}}>Restaurant</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeButton = ({onPress}) => {
  return (
    <View>
      <Button onPress={onPress} />
    </View>
  );
};

export default HomeButton;
