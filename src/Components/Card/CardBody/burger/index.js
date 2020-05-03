import React from 'react';
import {View, Text, Image} from 'react-native';
import {Kul4, Stars} from '../../../../Utils/Asets';

const index = () => {
  return (
    <View>
      <View style={styles.card}></View>
      <Image source={Kul4} style={styles.topimage} />
      <View style={styles.wrappertext}>
        <View>
          <Text style={styles.textasian}>Asian hyger Cheese</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={Stars} style={styles.stars} />
          <Text style={styles.text48}>4.8 </Text>
          <Text style={{marginLeft: 8}}>(139 ratings) </Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  text48: {color: '#4dbb63', marginLeft: 8},
  textasian: {marginLeft: 8, color: '#4dbb63'},
  stars: {height: 15, width: 15},
  card: {
    height: 200,
    width: 320,
    marginTop: 15,
    marginLeft: 18,
    marginRight: 15,
    borderRadius: 15,
    position: 'relative',
    flexWrap: 'wrap',
    backgroundColor: 'green',
  },
  topimage: {
    height: 200,
    width: 320,
    borderRadius: 15,
    position: 'absolute',
    marginTop: 15,
    marginLeft: 18,
  },
  wrappertext: {marginLeft: 18, marginTop: 10},
  textasian: {fontSize: 25, fontWeight: 'bold'},
};
export default index;
