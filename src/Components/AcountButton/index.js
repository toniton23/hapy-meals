import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Akun} from '../../Utils/Asets';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Akun} style={{height: 30, width: 30}} />
        <Text style={{fontWeight: 'bold'}}>Acount</Text>
      </TouchableOpacity>
    </View>
  );
};

const Acount = ({onPress}) => {
  return (
    <View>
      <Button onPress={onPress} />
    </View>
  );
};

export default Acount;
