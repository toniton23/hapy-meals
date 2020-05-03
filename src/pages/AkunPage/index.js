import React from 'react';
import {View, Text} from 'react-native';
import {BackButton, LoginButton} from '../../Components';
import {Input, ButtonAll} from '../../Atom';

const index = ({navigation, title}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={{marginTop: 15, marginLeft: -350}}>
        <BackButton onPress={() => handleGoTo('Home')} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            color: '#4dbb63',
            marginLeft: 38,
            marginTop: 30,
          }}>
          Create your account
        </Text>
      </View>
      <View style={{marginLeft: 10}}>
        <View style={{marginBottom: 20, marginTop: 50}}>
          <Input title="Username" />
        </View>
        <View style={{marginBottom: 20}}>
          <Input title="Email" />
        </View>
        <View style={{marginBottom: 20}}>
          <Input title="Password" />
        </View>
        <View style={{marginBottom: 20}}>
          <Input title="Phone" />
        </View>
      </View>
      <ButtonAll title="REGISTER" />
      <View
        style={{
          width: '50%',
          marginLeft: 100,
          marginTop: 5,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>
          By clicking register you agree to the our terms and condition
        </Text>
      </View>
      <View style={{marginTop: 70, marginLeft: 80, flexDirection: 'row'}}>
        <Text style={{fontSize: 17}}>Already have an account?</Text>
        <LoginButton onPress={() => handleGoTo('Login')} />
      </View>
    </View>
  );
};

export default index;
