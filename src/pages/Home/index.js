import React from 'react';
import {View, Text} from 'react-native';
import HomeButton from '../../Components/HomeButton';
import OferButton from '../../Components/OferButton';
import AkunButton from '../../Components/AcountButton';
import {ScrollView} from 'react-native-gesture-handler';
import {Search} from '../../Components';
import {List} from '../../Atom';

const BottomMenu = () => {
  return (
    <View>
      <View>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Search />
          <List />
        </View>
      </View>
      <View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 15,
              marginHorizontal: 20,
              marginBottom: 15,
            }}>
            <Text style={{fontSize: 30, color: '#4dbb63'}}>
              Popular Choices
            </Text>
            <Text>Show all</Text>
          </View>
        </ScrollView>
      </View>
      <View>
        <View style={styles.wrapper.bottommenu}>
          <HomeButton />
          <OferButton />
          <AkunButton />
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    bottommenu: {
      height: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'yellow',
      paddingHorizontal: 20,
    },
  },
};
export default BottomMenu;
