/* @flow */

import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import React from "react";
import { ListItem } from "react-native-elements";

class PackageItem extends React.Component {
  render() {
    return(
      <ListItem
        title={this.props.package.name}
        avatar={{ uri: this.props.package.defaultSticker.fileUrl }}
        onPress={() => this.props.navigation.navigate('Details', {title: this.props.package.name, packageId: this.props.package.id})}
      />
    );
  }
}

export default createFragmentContainer(PackageItem, graphql`
fragment PackageItem_package on Package {
  id
  name
  defaultSticker {
    fileUrl(width: 195, height: 195, format: "png")
  }
}
`)
