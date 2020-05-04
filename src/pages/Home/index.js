import React from 'react';
import {View, Text, Image} from 'react-native';
import HomeButton from '../../Components/HomeButton';
import OferButton from '../../Components/OferButton';
import AkunButton from '../../Components/AcountButton';
import {ScrollView} from 'react-native-gesture-handler';
import {Search, PopularButton} from '../../Components';
import {List} from '../../Atom';
import {Mul, burger, Kul1} from '../../Utils/Asets';
import {
  Burger,
  Ayam,
  Boil,
  Cakes,
  Pizza,
  Lunchbox,
  Salad,
} from '../../Components/Card';
import Coffe from '../../Components/Card/Coffe';
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
} from '../../Components/Card/CardBody';

const Home = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View>
        <View style={styles.wrapper.del}>
          <Text>Delivering to</Text>
        </View>
        <View style={styles.wrapper.current}>
          <Text style={styles.wrapper.textcurrent}>Current location</Text>
          <Image source={Mul} style={styles.wrapper.mul} />
        </View>
      </View>
      <View>
        <View style={styles.wrapper.searchbar}>
          <Search />
          <PopularButton onPress={() => handleGoTo('Popular')} />
        </View>
      </View>
      <View>
        <View style={styles.wrapper.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.wrapper.topmenu}>
                <View style={styles.wrapper.itemmenu}>
                  <Burger onPress={() => handleGoTo('Burger')} />
                </View>
                <View style={styles.wrapper.itemmenu}>
                  <Ayam />
                </View>
                <View style={styles.wrapper.itemmenu}>
                  <Boil />
                </View>
                <View style={styles.wrapper.itemmenu}>
                  <Cakes />
                </View>
                <View style={styles.wrapper.itemmenu}>
                  <Coffe />
                </View>
                <View style={styles.wrapper.itemmenu}>
                  <Pizza />
                </View>
                <View style={styles.wrapper.itemmenu}>
                  <Lunchbox />
                </View>
                <View style={styles.wrapper.itemmenu}>
                  <Salad />
                </View>
              </View>
            </ScrollView>
            <View>
              <Card1 />
              <Card2 />
              <Card3 />
              <Card4 />
              <Card5 />
              <Card6 />
            </View>
            <View></View>
          </ScrollView>
        </View>
      </View>
      <View>
        <View style={styles.wrapper.bottommenu}>
          <HomeButton />
          <OferButton onPress={() => handleGoTo('Offer')} />
          <AkunButton onPress={() => handleGoTo('Akun')} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    del: {marginLeft: 20, marginTop: 8},
    current: {
      flexDirection: 'row',
      width: '100%',
      height: 30,
      marginLeft: 20,
      alignItems: 'center',
    },
    textcurrent: {fontSize: 20, fontWeight: 'bold'},
    mul: {height: 7, width: 15, marginLeft: 12, marginTop: 5},
    searchbar: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
      justifyContent: 'space-between',
    },
    body: {
      marginTop: 15,
      height: 471,
    },
    topmenu: {
      flexDirection: 'row',
      marginLeft: 18,
      justifyContent: 'space-between',
    },
    itemmenu: {marginRight: 15},
    bottommenu: {
      height: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
  },
};
export default Home;
