/* @flow */

import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import React from "react";
import { ListItem } from "react-native-elements";

export default createFragmentContainer(PackageItem, graphql`
fragment PackageItem_package on Package {
  id
  name
  defaultSticker {
    fileUrl(width: 195, height: 195, format: "png")
  }
}
`)

export class PackageItem extends React.Component {
  render() {
    return(
      <ListItem
        title={this.props.package.name}
        avatar={{ uri: this.props.package.defaultSticker }}
        onPress={() => this.props.navigation.navigate('Details', {title: this.props.package.name})}
      />
    );
  }
}