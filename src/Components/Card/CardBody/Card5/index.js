import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Kul4, Stars} from '../../../../Utils/Asets';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Image source={Kul4} style={styles.image} />
      </View>
      <View style={styles.wrappertext}>
        <Text style={styles.text}>Asian burger cheese</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={Stars} style={{height: 15, width: 15}} />
          <Text style={{fontSize: 15, marginLeft: 5}}>4.8 (139 ratings) </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Cards = ({onPress}) => {
  return <Button onPress={onPress} />;
};

const styles = {
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
    marginTop: 10,
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
