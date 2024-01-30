import React, {useState} from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill(){
    setMySkills(oldSkill => [...oldSkill, newSkill]);
  }
  
  return(
    <View style={style.container}>
      <Text style={style.titule}>Welcome, Matheus</Text>
      <TextInput 
        style={style.input}
        placeholder="New Skills"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      
      <Button onPress={handleAddNewSkill} />

      <Text style={[style.titule, {marginTop: 35}]}>
        My Skills:
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <SkillCard skill={item} />
        )}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 20
  },
  titule: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 5
  },
  skillButton: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    alignItems: 'center',
    marginVertical: 10
  },
  skillText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
})