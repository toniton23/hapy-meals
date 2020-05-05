import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {BackButton, LoginButton} from '../../Components';
import {Input, ButtonAll} from '../../Atom';
import {Form} from 'native-base';
import {useSelector} from 'react-redux';

const Register = ({navigation, title}) => {
  const globalState = useSelector((state) => state);
  const [form, setForm] = useState({
    username: 'toniton23',
    email: 'toniton23@gmail.com',
    password: 'apaajaboleh',
  });
  const sendData = () => {
    console.log('Data yang di kirim', form);
  };
  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={{marginTop: 15, marginLeft: -350}}>
        <BackButton onPress={() => handleGoTo('Home')} />
      </View>
      <View>
        <Text style={styles.textcreate}>
          Create your account {globalState.name}
        </Text>
      </View>
      <View style={{marginLeft: 10}}>
        <View style={{marginBottom: 20, marginTop: 50}}>
          <Input
            title="Username"
            value={form.username}
            onChangeText={(value) => onInputChange(value, 'username')}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <Input
            title="Email"
            value={form.email}
            onChangeText={(value) => onInputChange(value, 'email')}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <Input
            title="Password"
            value={form.password}
            onChangeText={(value) => onInputChange(value, 'password')}
            secureTextEntry={true}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <Input title="Phone" value={Form.phone} />
        </View>
      </View>
      <ButtonAll title="REGISTER" onPress={sendData} />
      <View style={styles.wrappertextby}>
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

const styles = {
  textcreate: {
    fontSize: 25,
    color: '#4dbb63',
    marginLeft: 38,
    marginTop: 30,
  },
  wrappertextby: {
    width: '50%',
    marginLeft: 100,
    marginTop: 5,
    justifyContent: 'center',
  },
};
export default Register;
