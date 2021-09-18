
import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { firestore } from 'react-native-firebase';

export default class App extends Component {
  state = {
    email: '',
    password:'',
   isAutenticated: false,
  }
  login = async ()=>{
    const {email, password } = this.state;
    try{
      const user = await firestore.auth()
      .signInWithEmailAndPassword(email, password);

      this.setState({isAutenticated:true});
      console.log(user);
    }catch (err){
      console.log(err);
    }
    
  }

  render() {
    return (
      <View
        style={{
          flex:1,
          justifyContent:'center',
          alignItems: 'center',
          padding:20,
          backgroundColor: 'black',
        }}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            value={this.state.email}
            onChangeText={email=> this.setState({email})}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={this.state.senha}
            onChangeText={senha=> this.setState({senha})}
          />
          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>

          {this.state.isAutenticated ? <Text> Logado com sucesso </Text> : null}
      </View>

    );
  }
}



const styles = StyleSheet.create({
 
  input:{
    height: 45,
    backgroundColor:'#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button:{
    height: 45,
    backgroundColor:'#069',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#FFF',
    fontWeight:'bold',
    fontSize: 20,
    backgroundColor:'#069'
  }
});


