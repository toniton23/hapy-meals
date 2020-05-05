import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const Search = ({placeholder, title, ...rest}) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <TextInput style={styles.input} placeholder={title} {...rest} />
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
  },
  input: {
    borderWidth: 0.2,
    paddingLeft: 25,
    paddingVertical: 12,
    borderRadius: 25,
    fontSize: 16,
    color: 'black',
    width: '90%',
    height: 50,
  },
};
export default Search;
