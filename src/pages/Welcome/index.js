import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {
  Nasi,
  Ayam,
  kentang,
  burger,
  pizza,
  slice,
  salad,
  kopi,
  lunch,
  juice,
  food,
  ikan,
  meat,
  stroberi,
  boil,
  mcd,
} from '../../Utils/Asets';
import ActionButton from '../../Components/Button';

const Welcome = ({navigation, title}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View stle={{flex: 1}}>
        <View style={styles.wrapper.body}>
          <Image source={Nasi} style={styles.wrapper.image} />
          <Image source={Ayam} style={styles.wrapper.image} />
          <Image source={kentang} style={styles.wrapper.image} />
          <Image source={burger} style={styles.wrapper.image} />
          <Image source={pizza} style={styles.wrapper.image} />
          <Image source={slice} style={styles.wrapper.image} />
          <Image source={salad} style={styles.wrapper.image} />
          <Image source={kopi} style={styles.wrapper.image} />
          <Image source={lunch} style={styles.wrapper.image} />
          <Image source={juice} style={styles.wrapper.image} />
          <Image source={food} style={styles.wrapper.image} />
          <Image source={ikan} style={styles.wrapper.image} />
          <Image source={meat} style={styles.wrapper.image} />
          <Image source={stroberi} style={styles.wrapper.image} />
          <Image source={boil} style={styles.wrapper.image} />
          <Image source={mcd} style={styles.wrapper.image} />
        </View>
      </View>
      <View style={styles.wrapper.card}>
        <Text style={styles.wrapper.hapy}>Happy Meals</Text>
        <Text style={styles.wrapper.discover}>
          Discover the best foods from over 1,000 restaurants
        </Text>
        <ActionButton
          onPress={() => {
            handleGoTo('Home');
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    body: {
      height: 400,
      width: '80%',
      backgroundColor: '#fbf5f2',
      flexWrap: 'wrap',
      marginTop: 20,
      marginHorizontal: 35,
    },
    image: {height: 65, width: 65, margin: 10},
    card: {
      height: 300,
      width: '100%',
      backgroundColor: '#4dbb63',
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
    },
    hapy: {fontSize: 50, color: 'white', marginLeft: 35, marginTop: 10},
    discover: {fontSize: 25, color: 'white', marginLeft: 35, marginTop: 10},
  },
};
export default Welcome;
