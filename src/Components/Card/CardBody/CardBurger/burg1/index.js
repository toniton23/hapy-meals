import React from 'react';
import {View, Text, Image} from 'react-native';
import {bur2, Stars} from '../../../../../Utils/Asets';

const index = () => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.cardimage}>
          <Image source={bur2} style={styles.image} />
        </View>
        <View style={styles.wrapperfast}>
          <Text style={styles.textfast}>Oriental Burger</Text>
          <Text style={{marginTop: 5}}>Cafe: local food</Text>
          <View style={styles.wrapperstars}>
            <Image source={Stars} style={styles.stars} />
            <Text style={styles.text49}>4.5</Text>
            <Text style={{marginLeft: 8}}>(104 ratings)</Text>
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
    borderRadius: 15,
  },
};
export default index;
