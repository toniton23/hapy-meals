import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  Search,
  PopularButton,
  MulButton,
  Burger,
  CardMenu,
} from '../../Components';
import {ScrollView} from 'react-native-gesture-handler';
import {Ayams} from '../../Components';
import {Chiken, Kul1, Stars} from '../../Utils/Asets';

const index = () => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <View style={styles.del}>
            <Text>Delivering to</Text>
          </View>
          <View style={styles.current}>
            <Text style={styles.textcurrent}>Current location</Text>
          </View>
          <View style={styles.searchbar}>
            <Search />
            <View style={styles.popular}>
              <PopularButton onPress={() => handleGoTo('Popular')} />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <ScrollView showsHorizontalScrollIndicator={false}>
              <View style={styles.topmenu}>
                <View style={styles.itemmenu}>
                  <Burger onPress={() => handleGoTo('Burger')} />
                </View>
                <View style={styles.itemmenu}>
                  <Ayams image={Chiken} />
                </View>
              </View>
            </ScrollView>
            <View>
              <View
                style={{
                  width: '90%',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <CardMenu
                  image={Kul1}
                  cafe="holwood Stars Cafe"
                  text="4.9 (124 ratings)"
                />
                <CardMenu
                  image={Kul1}
                  cafe="holwood Stars Cafe"
                  text="4.9 (124 ratings)"
                />
                <CardMenu
                  image={Kul1}
                  cafe="holwood Stars Cafe"
                  text="4.9 (124 ratings)"
                />
                <CardMenu
                  image={Kul1}
                  cafe="holwood Stars Cafe"
                  text="4.9 (124 ratings)"
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottom}></View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  itemmenu: {marginRight: 10},
  topmenu: {
    flexDirection: 'row',
    marginLeft: 18,
    justifyContent: 'space-between',
    height: 80,
    backgroundColor: 'pink',
  },
  popular: {marginTop: 15, marginRight: 18},
  searchbar: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
  },
  textcurrent: {fontSize: 20, fontWeight: 'bold'},
  current: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    marginLeft: 20,
    alignItems: 'center',
  },
  del: {marginLeft: 20, marginTop: 18, width: '100%'},
  bottom: {
    backgroundColor: 'blue',
    width: '100%',
    height: '10%',
  },
  body: {
    width: '100%',
    height: '70%',
  },
  top: {width: '100%', height: '20%'},
  wrapper: {width: '100%', height: '100%'},
});
