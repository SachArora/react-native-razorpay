/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var RazorpayCheckout = require('react-native-razorpay');


class example extends Component {
  render() {
    return (
      <View style={styles.container}>
       <TouchableHighlight onPress={() => {
        var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_1DP5mmOlF5G5ag',
          amount: '5000',
          name: 'foo',
          prefill: {email: 'pranav@razorpay.com', contact: '8879524924', name: 'Pranav Gupta'},
          theme: {color: '#F37254'}
        }
        RazorpayCheckout.open(options, this.onSuccess.bind(this), this.onError.bind(this))
       }}>
      <Text style = {styles.text}>Pay</Text>
    </TouchableHighlight>
    </View>
    );
  }

  onSuccess(razorpay_payement_id){
      alert("Success: "+ razorpay_payement_id)
  }

  onError(code, response){
      alert("Error: " + code + "|" + "response")
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('example', () => example);
