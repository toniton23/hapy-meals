import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Stars} from '../../../Utils/Asets';

const Cardmenu = (props) => {
  return (
    <View>
      <Image
        source={props.image}
        style={{height: 250, width: '100%', borderRadius: 15}}
      />
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 10}}>
          {props.cafe}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 3,
          marginBottom: 25,
        }}>
        <Image source={Stars} style={{height: 15, width: 15}} />
        <Text style={{fontSize: 15, marginLeft: 8}}>{props.text}</Text>
        <Text style={{fontSize: 15, marginLeft: 8}}>{props.rating}</Text>
      </View>
    </View>
  );
};

export default Cardmenu;

const styles = StyleSheet.create({});
