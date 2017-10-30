/* @flow */

import React from "react";
import { FlatList } from "react-native";
import PackageItem from "./PackageItem";

import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class PackageList extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <FlatList
        data={this.props.systemTag.packages.edges}
        renderItem={({ item }) => {
            return (
              <PackageItem
                package={item.node}
                navigation={this.props.navigation}
              />)
          }
        }
        keyExtractor={item => item.node.id}
      />
    );
  }
}

export default createFragmentContainer(PackageList, graphql`
fragment PackageList_systemTag on SystemTag {
  packages(first: 30, after: "") {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        ...PackageItem_package
      }
    }
  }
}
`)
