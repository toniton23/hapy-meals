import React from 'react';
import {View, Text, Image} from 'react-native';
import {Lis} from '../../Utils/Asets';

const List = () => {
  return (
    <View>
      <Image source={Lis} style={{height: 30, width: 30}} />
    </View>
  );
};

export default List;
