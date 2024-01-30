import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function Button({onPress}){
    return(
        <TouchableOpacity style={style.button} activeOpacity={0.7} onPress={onPress}>
            <Text style={style.textButton}>Adicionar</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button:{
      backgroundColor: "#A370F7",
      marginTop: 10,
      borderRadius: 15,
      padding: 15,
      alignItems: 'center'
    },
    textButton: {
      color: '#FFF',
      fontSize: 15,
      fontWeight: 'bold'
    }
  })