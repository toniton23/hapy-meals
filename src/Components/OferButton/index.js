import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ofer} from '../../Utils/Asets';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={ofer} style={{height: 30, width: 30}} />
        <Text style={{fontWeight: 'bold'}}>Offer</Text>
      </TouchableOpacity>
    </View>
  );
};

const OferButton = ({onPress}) => {
  return (
    <View>
      <Button onPress={onPress} />
    </View>
  );
};

export default OferButton;
