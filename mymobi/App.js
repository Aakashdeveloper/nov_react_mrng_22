import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';
import Display from './Component/displayComponent';

const url = "http://3.17.216.66:4000/restaurants"

function App() {
  const [title,updateTitle] = useState('React Native App');
  const [rest,setRest] = useState('')

  useEffect(() => {
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
      setRest(data)
    } )
  })

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button  title="ChangeTitle" color="#g144ff"
      onPress={() => {updateTitle('New Title Clicked')}}/>
       <Button  title="Revert" color="red"
      onPress={() => {updateTitle('React Native App')}}/>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Display restList={rest}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
