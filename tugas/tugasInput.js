import React, {Component} from 'react';
import {
  View, Text, TextInput,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
} from 'react-native';

export default class App extends Component {

  state = {
    username: '',
    email: '',
    password: '',
  }

  inputUsername(x) {
    this.setState({
      username: x,
    });
  }

  inputEmail(y) {
    this.setState({
      email: y,
    });
  }

  inputPassword(z) {
    var zz = '';
    var zx = z.length;
    for(var i = 1; i <= zx; i++) {
      zz += '*';
    }

    this.setState({
      password : zz,
    });
  }

  sendForm() {
    if((this.state.username) && (this.state.email) && (this.state.password)) {
      Alert.alert(
        'Apa kamu yakin?', 
        'Data yang akan dikirimkan \n \n' +
        'Username: ' + this.state.username + '\n' +
        'Email: ' + this.state.email +'\n'+
        'Password: ' + this.state.password,
        [
          {text: 'Tidak'},
          {text: 'Ya Benar!'},
        ]
      )
    } else {
      Alert.alert(
        'Error', 
        'Jangan ada data yang kosong',
      )
    }
  }

  render() {
    return(
      <KeyboardAvoidingView style={{flex:1, backgroundColor: '#fff'}} behavior="padding">
      <View style={styles.container}>
        <Text style={styles.title}>
          FORM REGISTRATION
        </Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>
            USERNAME :
          </Text>
          <TextInput 
            style={styles.input}
            autoCapitalize= 'words'
            onChangeText={(text) => this.inputUsername(text)}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>
            EMAIL :
          </Text>
          <TextInput 
            style={styles.input}
            textContentType= "emailAddress"
            onChangeText= {(text) => this.inputEmail(text)}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>
            PASSWORD :
          </Text>
          <TextInput 
            style={styles.input}
            secureTextEntry= {true}
            placeholder="Your password will be secured"
            onChangeText= {(text) => this.inputPassword(text)}
          />
        </View>
        <View style={{width: '100%', alignItems:'center'}}>
          <TouchableNativeFeedback onPress={() => this.sendForm()}>
            <View style={styles.buttonWrapper}>
              <Text style={styles.button} >
                SUBMIT
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 40
  },
  title: {
    fontSize: 24,
    letterSpacing: -1,
    margin: 20
  },
  inputWrapper: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#222',
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontSize: 18
  },
  buttonWrapper: {
    width: '60%',
    alignItems: 'center',
    backgroundColor: 'tomato',
    marginTop: 20
  },
  button: {
    paddingVertical: 10,
    color: '#eee',
    fontSize: 18
  }
});