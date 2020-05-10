import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import HomeButton from '../../Components/HomeButton';
import OferButton from '../../Components/OferButton';
import AkunButton from '../../Components/AcountButton';
import {ScrollView} from 'react-native-gesture-handler';
import {Search, PopularButton, MulButton} from '../../Components';
import {List} from '../../Atom';
import {Mul, burger, Kul1, Ayams} from '../../Utils/Asets';
import {
  Burger,
  Boil,
  Cakes,
  Pizza,
  Lunchbox,
  Salad,
  CardMenu,
  Ayam,
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
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{width: '100%', height: '17%', backgroundColor: 'red'}}>
        <View>
          <View style={styles.wrapper.del}>
            <Text>Delivering to</Text>
          </View>
          <View style={styles.wrapper.current}>
            <Text style={styles.wrapper.textcurrent}>Current location</Text>
          </View>
        </View>
        <View>
          <View style={styles.wrapper.searchbar}>
            <Search />
            <View style={styles.wrapper.popular}>
              <PopularButton onPress={() => handleGoTo('Popular')} />
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.wrapper.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{backgroundColor: 'yellow', height: 100, marginTop: 10}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.wrapper.topmenu}>
                  <View style={styles.wrapper.itemmenu}>
                    <Burger onPress={() => handleGoTo('Burger')} />
                  </View>
                  <View style={styles.wrapper.itemmenu}>
                    <Ayam image={Ayams} text="Ayam" />
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
            </View>
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
    popular: {
      width: 150,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 5,
    },
    del: {marginLeft: 20, marginTop: 8, width: '100%'},
    current: {
      flexDirection: 'row',
      width: '100%',
      height: 30,
      marginLeft: 20,
      alignItems: 'center',
    },
    textcurrent: {fontSize: 20, fontWeight: 'bold'},
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
      width: '100%',
      height: '85%',
      backgroundColor: 'blue',
    },
    topmenu: {
      flexDirection: 'row',
      marginLeft: 18,
      justifyContent: 'space-between',
    },

    bottommenu: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: 'yellow',
      marginTop: -80,
    },
  },
};
export default Home;
