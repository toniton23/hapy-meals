import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {Cari} from '../../Utils/Asets';

const Search = ({placeholder}) => {
  return (
    <View>
      <View
        style={{flexDirection: 'row', flexWrap: 'wrap', position: 'relative'}}>
        <Image
          source={Cari}
          style={{
            height: 25,
            width: 25,
            marginLeft: 20,
            position: 'absolute',
            marginTop: 8,
          }}
        />
        <TextInput style={styles.input} placeholder={placeholder} />
      </View>
    </View>
  );
};

const styles = {
  input: {
    borderWidth: 1,
    paddingLeft: 60,
    paddingVertical: 12,
    borderRadius: 25,
    fontSize: 16,
    color: 'black',
    width: '80%',
    height: 40,
  },
};
export default Search;
