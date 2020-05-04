import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {Cari} from '../../Utils/Asets';

const Search = ({placeholder}) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={Cari} style={styles.image} />
        <TextInput style={styles.input} placeholder="Search foods" />
      </View>
    </View>
  );
};

const styles = {
  image: {
    height: 25,
    width: 25,
    marginLeft: 20,
    position: 'absolute',
    marginTop: 8,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 15,
    position: 'relative',
    backgrounColor: 'green',
    marginLeft: 18,
  },
  input: {
    borderWidth: 0.2,
    paddingLeft: 60,
    paddingVertical: 12,
    borderRadius: 25,
    fontSize: 16,
    color: 'black',
    width: 230,
    height: 40,
  },
};
export default Search;
