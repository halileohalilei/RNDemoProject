/* @flow */

import React from "react";
import { Text, View, Button } from "react-native";

export default class PackageDetailsScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
		headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
		headerStyle:{
				backgroundColor:'white',
		},
  });

	render() {
		const {state} = this.props.navigation;
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>{state.params.packageName}</Text>
				<Button 
					onPress={() => this.props.navigation.goBack()}
					title = "Go Back"
				/>
			</View>
		);
	}
}