import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {lunch} from '../../../Utils/Asets';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Image source={lunch} style={styles.image} />
      </View>
      <View style={styles.wrappertext}>
        <Text style={styles.text}>Lunch Box</Text>
      </View>
    </TouchableOpacity>
  );
};

const Lunchs = ({onPress}) => {
  return <Button onPress={onPress} />;
};

const styles = {
  wrapper: {
    height: 80,
    width: 80,
    backgroundColor: '#f2d8b3',
    flexWrap: 'wrap',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  image: {height: 60, width: 60, position: 'absolute'},
  wrappertext: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontWeight: 'bold'},
};
export default Lunchs;
