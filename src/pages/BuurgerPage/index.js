import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import HomeButton from '../../Components/HomeButton';
import OferButton from '../../Components/OferButton';
import AkunButton from '../../Components/AcountButton';

import {Burg1, Burg2, Burg3} from '../../Components/Card/CardBody';
import {bur1} from '../../Utils/Asets';
import {ScrollView} from 'react-native-gesture-handler';
import {BackWhite} from '../../Components';

const Home = ({navigation, onPress}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.topcard}>
        <ImageBackground source={bur1} style={styles.wrapper.topimage}>
          <View style={{marginLeft: -350, marginTop: 15}}>
            <BackWhite onPress={() => handleGoTo('Home')} />
          </View>
          <Text style={styles.wrapper.textburger}>Burgers</Text>
        </ImageBackground>
        <View></View>
      </View>
      <View style={styles.wrapper.wrapperbody}>
        <View style={styles.wrapper.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                borderTopStartRadius: 25,
                flex: 1,
              }}>
              <Burg1 />
              <Burg2 />
              <Burg3 />
            </View>
          </ScrollView>
        </View>
      </View>
      <View>
        <View style={styles.wrapper.bottommenu}>
          <HomeButton onPress={() => handleGoTo('Home')} />
          <OferButton onPress={() => handleGoTo('Offer')} />
          <AkunButton onPress={() => handleGoTo('Akun')} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    textburger: {
      fontSize: 40,
      color: 'white',
      fontWeight: 'bold',
      marginTop: 100,
      marginLeft: 20,
    },
    topimage: {height: 230, width: '100%'},
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
