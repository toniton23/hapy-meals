import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Mul} from '../../Utils/Asets';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={Mul}
          style={{height: 7, width: 15, marginLeft: 12, marginTop: 5}}
        />
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
