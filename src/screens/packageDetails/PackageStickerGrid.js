/* @flow */

import React from "react";
import { StyleSheet, ListView, Text } from "react-native";
import PackageStickerGridItem from "./PackageStickerGridItem";
import glamorous from "glamorous-native";

import {
  createFragmentContainer,
  graphql
} from 'react-relay'

const { View } = glamorous

class PackageStickerGrid extends React.Component {
  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    ds = ds.cloneWithRows(this.props.package.stickers.edges);
    return(
      <View>
        <View height={12}/>
        <ListView
          contentContainerStyle={{flexDirection: 'row', 
                                  flexWrap: 'wrap',
                                  alignContent: 'flex-start', 
                                  justifyContent: 'space-between',
                                  paddingHorizontal: 12,}}
          dataSource={ds}
          renderRow={(rowData) => <PackageStickerGridItem sticker={rowData.node}/>}
        />
      </View>
    );
  }
}

export default createFragmentContainer(PackageStickerGrid, graphql`
fragment PackageStickerGrid_package on Package {
  stickers {
    totalCount
    edges {
      cursor
      node {
        ...PackageStickerGridItem_sticker
      }
    }
  }
}
`)
