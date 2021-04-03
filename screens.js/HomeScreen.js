import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Submitted')}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Absent</Text>
          </View>

          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Present</Text>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});