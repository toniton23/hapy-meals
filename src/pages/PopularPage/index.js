import React from 'react';
import {View, Text, Image} from 'react-native';

import {
  AkunButton,
  Search,
  Burger1,
  CardFastGood,
  NewRest1,
  NewRest2,
  NewRest3,
  Burger2,
  Burger3,
  BackButton,
} from '../../Components';
import {List} from '../../Atom';
import {ScrollView} from 'react-native-gesture-handler';
import {Homebutton, Oferbuton} from '../../Components';

const Burgerpage = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View>
        <View style={styles.wrapper.searchbar}>
          <BackButton onPress={() => handleGoTo('Home')} />
          <View style={{marginLeft: -70}}>
            <Search />
          </View>
          <List />
        </View>

        <View style={styles.wrapper.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapper.popular}>
              <Text style={styles.wrapper.textpop}>Popular Choices</Text>
              <Text>Show all</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Burger1 />
                <Burger2 />
                <Burger3 />
              </ScrollView>
            </View>
            <View style={styles.wrapper.wrapnew}>
              <Text style={styles.wrapper.textnew}>New Restaurant</Text>
              <Text>Show all</Text>
            </View>
            <CardFastGood />
            <NewRest1 />
            <NewRest2 />
            <NewRest3 />
          </ScrollView>
        </View>
      </View>
      <View>
        <View style={styles.wrapper.bottommenu}>
          <Homebutton onPress={() => handleGoTo('Home')} />
          <Oferbuton onPress={() => handleGoTo('Offer')} />
          <AkunButton onPress={() => handleGoTo('Akun')} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    textnew: {fontSize: 30, fontWeight: 'bold', color: '#4dbb63'},
    wrapnew: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingHorizontal: 18,
      marginTop: 20,
    },
    textpop: {fontSize: 35, color: '#4dbb63', fontWeight: 'bold'},
    body: {height: 536, marginTop: 15},
    bottommenu: {
      height: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    searchbar: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 15,
      marginLeft: 18,
      marginRight: 18,
      backgrounColor: 'pink',
    },
    popular: {
      height: 35,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 18,
      marginTop: 15,
    },
  },
};
export default Burgerpage;
