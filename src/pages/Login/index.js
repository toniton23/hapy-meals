import React from 'react';
import {View, Text} from 'react-native';
import {BackButton, PasswordButton} from '../../Components';
import {Input, ButtonAll} from '../../Atom';

const index = ({navigation, title}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.back}>
        <BackButton onPress={() => handleGoTo('Home')} />
      </View>
      <View>
        <Text style={styles.textlog}>Log in to your account</Text>
      </View>
      <View style={{marginLeft: 10}}>
        <View style={styles.wrapperinput}>
          <Input title="Username or Email" />
        </View>
        <View style={{marginBottom: 20}}>
          <Input title="Password" />
        </View>
      </View>
      <ButtonAll title="LOGIN" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={{fontSize: 17, marginLeft: 5}}>Forgot</Text>
        <PasswordButton onPress={() => handleGoTo('Password')} />
      </View>
    </View>
  );
};

const styles = {
  textlog: {
    fontSize: 25,
    color: '#4dbb63',
    marginLeft: 38,
    marginTop: 30,
  },
  wrapperinput: {marginBottom: 20, marginTop: 50},
  back: {marginTop: 15, marginLeft: -350},
};
export default index;
