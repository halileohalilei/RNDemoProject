/* @flow */

import React from "react";
import glamorous, { ThemeProvider } from "glamorous-native";

import {
  createFragmentContainer,
  graphql
} from 'react-relay'

const { View, Text } = glamorous;

class PackageDetailView extends React.Component {
  render() {
    return(
      <View backgroundColor={'#fff'}
            borderBottomWidth={0.5}
            borderBottomColor={'rgb(180, 180, 180)'}
            justifyContent={'center'}>
        <Text fontSize={24}
              alignSelf={'center'}
              margin={20}
        >Package author: {this.props.package.account.displayName}
        </Text>
      </View>
    );
  }
}

export default createFragmentContainer(PackageDetailView, graphql`
fragment PackageDetailView_package on Package {
  account {
    displayName
  }
  coins
}
`)
