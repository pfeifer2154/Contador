import React,{useState,useEffect} from 'react'
import {Text,Button,View,StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App(){
  const [contador,setcontador]=useState(0)

  useEffect(() => {
    loadCount();
  }, []);
  
  const loadCount = async () => {
    try {
      const savedCount = await AsyncStorage.getItem('contador');
      if (savedCount !== null) {
        setcontador(parseInt(savedCount));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const saveCount = async () => {
    try {
      await AsyncStorage.setItem('contador', contador.toString());
      console.log('Contador salvo com sucesso!');
    } catch (e) {
      console.log(e);
    }
  };

  const handleSave = () => {
    saveCount();
  };

  return (
   <View style={styles.conteiner}>
   <Text style={styles.Texto}>{contador}</Text>
   <Button  
   title='Clica em mim' 
   onPress={()=>setcontador(contador+1)} />
   <View style={styles.espaco}></View>
   <Button  
   title='Salvar' 
   onPress={handleSave} />
   </View>
  )
}

const styles=StyleSheet.create({
  conteiner:{
  marginTop:250,
  flex:1,
  padding:30,
  alignItems:'center',
  },
  Texto:{
  fontSize:50,
  padding:40,
  },
  espaco:{
  padding:10,
  },
})