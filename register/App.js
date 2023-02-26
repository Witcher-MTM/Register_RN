import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <View style={styles.formValue}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputBox}>
            <Ionicons name="mail-outline" size={24} color="black" />
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#777" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
          </View>
          <View style={styles.inputBox}>
            <Ionicons name="lock-closed-outline" size={24} color="black" />
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#777" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} />
          </View>
          <View style={styles.forget}>
            <TouchableOpacity style={styles.checkbox}>
              <Text style={styles.remember}>Remember Me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link}>
              <Text style={styles.forgetPassword}>Forget Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.register}>
            <Text style={styles.registerText}>Don't have an account? <Text style={styles.link}>Register</Text></Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formValue: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333'
  },
  forget: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  remember: {
    fontSize: 16,
    color: '#333'
  },
  link: {
    fontSize: 16,
    color: '#00a2ff',
    textDecorationLine: 'underline'
  },
  forgetPassword: {
    fontSize: 16,
    color: '#00a2ff'
  },
  button: {
    backgroundColor: '#00a2ff',
    borderRadius: 30,
    padding: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#777'
},
});
