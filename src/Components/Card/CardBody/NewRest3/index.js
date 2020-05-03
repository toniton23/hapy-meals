import React from 'react';
import {View, Text, Image} from 'react-native';
import {Kul6, Stars} from '../../../../Utils/Asets';

const index = () => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.cardimage}>
          <Image source={Kul6} style={styles.image} />
        </View>
        <View style={styles.wrapperfast}>
          <Text style={styles.textfast}>Bakmie Acong</Text>
          <Text style={{marginTop: 5}}>Cafe: chinese food</Text>
          <View style={styles.wrapperstars}>
            <Image source={Stars} style={styles.stars} />
            <Text style={styles.text49}>4.6</Text>
            <Text style={{marginLeft: 8}}>(119 ratings)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = {
  text49: {color: '#4dbb63', marginLeft: 5},
  stars: {height: 15, width: 15},
  wrapperstars: {flexDirection: 'row', marginTop: 3},
  textfast: {fontSize: 25, fontWeight: 'bold', marginTop: 10},
  wrapperfast: {flexDirection: 'column', marginLeft: 15},
  image: {
    height: 150,
    width: 150,
    position: 'absolute',
    borderRadius: 15,
  },
  cardimage: {
    height: 150,
    width: 150,
    backgroundColor: 'green',
    borderRadius: 15,
    flexWrap: 'wrap',
    position: 'relative',
  },
  wrapper: {
    flexDirection: 'row',
    marginLeft: 18,
    marginTop: 10,
    marginBottom: 10,
  },
};
export default index;
