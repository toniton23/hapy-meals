import React from 'react';
import {View, Text, Image} from 'react-native';
import HomeButton from '../../Components/HomeButton';
import OferButton from '../../Components/OferButton';
import AkunButton from '../../Components/AcountButton';
import {ScrollView} from 'react-native-gesture-handler';

import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
} from '../../Components/Card/CardBody';
import {vespa, line} from '../../Utils/Asets';

const Home = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.topcard}>
        <View style={styles.wrapper.wrappertext}>
          <Text style={styles.wrapper.textlatest}>Latest Offers</Text>
          <Text style={styles.wrapper.textfind}>Find discount offers</Text>
          <Text style={{color: 'white'}}>special meals and more</Text>
          <View style={styles.wrapper.button}>
            <Text style={{fontWeight: 'bold'}}>20 Restaurants</Text>
          </View>
          <View>
            <Image source={vespa} style={styles.wrapper.vespa} />
          </View>
          <View></View>
        </View>
      </View>
      <View style={styles.wrapper.wrapperbody}>
        <View style={styles.wrapper.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                borderTopStartRadius: 25,
                flex: 1,
              }}>
              <Card1 />
              <Card2 />
              <Card3 />
              <Card4 />
              <Card5 />
              <Card6 />
            </View>
          </ScrollView>
        </View>
      </View>
      <View>
        <View style={styles.wrapper.bottommenu}>
          <HomeButton onPress={() => handleGoTo('Home')} />
          <OferButton />
          <AkunButton />
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    wrapperbody: {
      borderRadius: 25,
      marginTop: -25,
      borderStartColor: 'white',
    },
    vespa: {
      height: 200,
      width: 200,
      marginTop: -170,
      marginLeft: 180,
    },
    button: {
      height: 40,
      width: 130,
      backgroundColor: 'white',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      flexDirection: 'row',
    },
    textfind: {color: 'white', marginTop: 10},
    textlatest: {fontSize: 35, color: 'white', fontWeight: 'bold'},
    wrappertext: {marginLeft: 18, marginTop: 20},
    topcard: {width: '100%', height: 230, backgroundColor: '#4dbb63'},
    body: {
      height: 387,
      backgroundColor: 'white',
      borderRadius: 25,
      border: 1,
      flexWrap: 'wrap',
      position: 'relative',
      paddingTop: 20,
    },
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
