/* @flow */

import React from 'react';
import { ActivityIndicator } from "react-native";
import glamorous, { ThemeProvider } from "glamorous-native";

const { View } = glamorous;

export default class ContentLoadingView extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <View flexGrow={1}
            alignContent={'center'}
            justifyContent={'center'}>
        <ActivityIndicator size={'large'}/>
      </View>
    );
  }
}
