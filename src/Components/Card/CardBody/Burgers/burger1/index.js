import React from 'react';
import {View, Text} from 'react-native';
import {Kul4, Stars} from '../../../../../Utils/Asets';

const burger1 = () => {
  return (
    <View>
      <View style={styles.wrapper.topmenu}>
        <Image source={Kul4} style={styles.wrapper.topimage} />
      </View>
      <View style={styles.wrapperasian}>
        <Text style={styles.textasian}>Asian ger cheese</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={Stars} style={{height: 15, width: 15}} />
          <Text style={{marginLeft: 8}}>4.9 (150 ratings)</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  textasian: {fontSize: 25, fontWeight: 'bold'},
  wrapperasian: {marginLeft: 18, marginTop: 8},
  topimage: {
    height: 200,
    width: '100%',
    borderRadius: 15,
    position: 'absolute',
  },
  topmenu: {
    height: 200,
    width: '100%',
    marginTop: 15,
    marginLeft: 18,
    borderRadius: 15,
    position: 'relative',
    flexWrap: 'wrap',
  },
};
export default burger1;
