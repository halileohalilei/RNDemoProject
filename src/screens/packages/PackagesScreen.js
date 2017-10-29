/* @flow */

import React from "react";
import { Text, View, Button } from "react-native";

export default class PackagesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Details', {title: "TestName"})}
          title="Go to details"
        />
      </View>
    );
  }
}