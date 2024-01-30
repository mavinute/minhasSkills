import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function SkillCard({ skill }){
    return(
        <TouchableOpacity style={style.skillButton}>
            <Text style={style.skillText}>{skill}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
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