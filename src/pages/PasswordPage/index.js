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
        <Text style={styles.textlog}>Forgot password</Text>
      </View>
      <Text style={{marginLeft: 38, marginTop: 20}}>
        Please enter your Email to recive a link to create a new password via
        email
      </Text>
      <View style={{marginLeft: 10}}>
        <View style={styles.wrapperinput}>
          <Input title="Email" />
        </View>
      </View>
      <ButtonAll title="SEND" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}></View>
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
