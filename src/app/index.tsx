import { useState } from 'react'

import {TextInput, View, Text, StyleSheet, Pressable, Alert, 

} from 'react-native'

import { api } from '@/server/api'

import { isAxiosError } from 'axios'

// rota de navegação de dentro do app
export default function Home(){

  // criação de estados para guardar informações
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  async function handleSignIn(){
    try{
      const response = await api.post("/user",{
        email,
        password,
      })
      console.log("foi")
      alert("Olá " + response.data.name)  

    } catch(error) {
      if (isAxiosError(error)) {
        console.log(email)
        console.log(password)
        console.log(error)
        return alert(error.response?.data)
    }

    alert("Não foi possível entrar")
  }
  }


  return (
    <View style={styles.container}>

      <TextInput 
      style={styles.input} 
      placeholder="E-mail" 
      onChangeText={setEmail}
      />

      <TextInput style={styles.input} placeholder="Password" 
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={handleSignIn}>
      <Text style={styles.title}>Entrar</Text>
      </Pressable>

    </View>
  )


}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input:{
    height: 54,
    width:"80%",
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
  },
  button:{
    height: 54,
    width:"80%",
    backgroundColor: "lightGray",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  }
})