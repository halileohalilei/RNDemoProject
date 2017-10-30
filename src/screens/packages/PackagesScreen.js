/* @flow */

import React from "react";
import { Text, View, Button, FlatList, ActivityIndicator, ScrollView } from "react-native";
import { PackageList } from "./PackageList";

import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../../Environment'

const PackagesScreenGetTrendingPackagesQuery = graphql`
query PackagesScreenGetTrendingPackagesQuery {
  systemTag(slug: "trending-stickers") {
    id
    name
    ...PackageList_packages
  }
}
`

export default class PackagesScreen extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={PackagesScreenGetTrendingPackagesQuery}
        render={({error, props}) => {
          if (error) {
            return <ScrollView><Text>{error.message}</Text></ScrollView>
            // return <View style={{backgroundColor: "red"}}/>
          } else if (props) {
            // return <Text>LOL2</Text>
            console.log(props);
            return <PackageList currentData={props.systemTag} navigation={this.props.navigation}/>
          }
          return <ContentLoadingView/>
        }}
      />
    );
  }
}

class ContentLoadingView extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: "center", alignContent: "center"}}>
        <ActivityIndicator/>
      </View>
    );
  }
}