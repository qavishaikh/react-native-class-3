import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 50}}>Qavi SHaikh</Text>
      {/* <Text style={{fontSize: 30}}>First React Native App</Text>
      <Text style={{fontSize: 30}}>Digital Web Creations</Text>
      <Text style={Styles.textBox}>Home Doctor</Text>
      <Button title="Send"></Button>
      <Text>Components</Text> */}
      <Inp />
    </View>
  );
};

const Inp = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 50, color: 'red'}}>Handle Input</Text>
      <Text style={{fontSize: 30, color: 'blue'}}>{name}</Text>
      <TextInput
        style={Styles.input}
        placeholder="ENter Your Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="Cancel" onPress={() => setName('')}></Button>
    </View>
  );
};
const Styles = StyleSheet.create({
  textBox: {
    color: 'white',
    backgroundColor: 'red',
    fontSize: 30,
    height: 100,
    textAlignVertical: 'center',
    marginTop: 10,
    textAlign: 'center',
  },
  input: {
    fontSize: 20,
    color: 'blue',
    borderColor: 'blue',
    borderWidth: 2,
    margin: 10,
  },
});

const StateP = () => {
  const [name, setName] = useState('Qavi');
  const testUpdate = () => {
    setName('Hussain');
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>UseState Hook</Text>
      <Text style={{fontSize: 20}}>{name}</Text>
      <Button title="Update State" color={'red'} onPress={testUpdate}></Button>
    </View>
  );
};

const Firstcomp = () => {
  const fruit = val => {
    console.warn(val);
  };
  return (
    <View>
      <Text>BUtton On Press Events</Text>
      <Button title="On Press" color={'red'} onPress={fruit}></Button>
      <Button
        title="On Press with Parameter"
        color={'green'}
        onPress={() => fruit('Hello Qavi')}></Button>
    </View>
  );
};

const Hashir = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Name: Hashir SHaikh</Text>
      <Text style={{fontSize: 20}}>Age: 18</Text>
      <Text style={{fontSize: 20}}>Email: hashir@gmail.com</Text>
    </View>
  );
};

const Raqeeb = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Name: Raqeeb</Text>
      <Text style={{fontSize: 20}}>Age: 21</Text>
      <Text style={{fontSize: 20}}>Email: raqeeb1012@gmail.com</Text>
    </View>
  );
};

export default App;
