import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../Utils/Asets/colors';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            fontSize: 17,
            color: colors.default,
          }}>
          Popular choices
        </Text>
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
