/* @flow */
import React from "react";
import { StyleSheet, Text, Dimensions, Image } from "react-native";
import glamorous from "glamorous-native";

import {
  createFragmentContainer,
  graphql
} from 'react-relay'

var {height, width} = Dimensions.get('window');
let separationSize = 24;
let cellSize = (width - separationSize * 2) / 3;
var styles = StyleSheet.create({
  item: {
    // backgroundColor: 'red',
    width: cellSize,
    height: cellSize,
    marginBottom: separationSize/2
  }
});

const { View } = glamorous

class PackageStickerGridItem extends React.Component {
  render() {
    console.log(this.props.sticker.fileUrl);
    return(
      <View style={styles.item}>
        <Image source={{uri: this.props.sticker.fileUrl, width: cellSize, height: cellSize}}/>
      </View>
    );
  }
}

export default createFragmentContainer(PackageStickerGridItem, graphql`
fragment PackageStickerGridItem_sticker on Sticker {
  fileUrl
}
`)
