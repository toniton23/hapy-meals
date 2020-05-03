import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Kul1, Stars} from '../../../../Utils/Asets';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Image source={Kul1} style={styles.image} />
      </View>
      <View style={styles.wrappertext}>
        <Text style={styles.text}>Hollywood stars cafe</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={Stars} style={{height: 15, width: 15}} />
          <Text style={styles.text49}>4.9 (124 ratings) </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Cards = ({onPress}) => {
  return <Button onPress={onPress} />;
};

const styles = {
  text49: {fontSize: 15, marginLeft: 5},
  wrapper: {
    height: 250,
    width: 380,
    backgroundColor: '#f2d8b3',
    flexWrap: 'wrap',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 18,
    marginTop: 20,
  },
  image: {height: 250, width: 380, position: 'absolute', borderRadius: 15},
  wrappertext: {
    width: 400,
    justifyContent: 'center',
    marginLeft: 18,
    marginTop: 5,
    marginBottom: 10,
  },
  text: {fontWeight: 'bold', fontSize: 25},
};
export default Cards;
