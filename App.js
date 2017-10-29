/* @flow */

import React from "react";
import { Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import PackagesScreen from "./src/screens/packages/PackagesScreen";
import PackageDetailScreen from "./src/screens/packageDetails/PackageDetailScreen";

export default RootNavigator = StackNavigator({
  Packages: {
    screen: PackagesScreen,
    navigationOptions: {
      headerTitle: 'Packages',
    }
  },
  Details: {
    screen: PackageDetailScreen,
  },
});
