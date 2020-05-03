import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Akun, back} from '../../Utils/Asets';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={back}
          style={{height: 20, width: 2, paddingHorizontal: 18}}
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
