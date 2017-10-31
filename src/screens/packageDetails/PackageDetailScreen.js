/* @flow */

import React from "react";
import { Button, ActivityIndicator } from "react-native";
import glamorous, {ThemeProvider} from 'glamorous-native';
import ContentLoadingView from "../common/ContentLoadingView";
import PackageDetailView from "./PackageDetailView";

import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../../Environment'

const PackageDetailsScreenGetPackageDetailsQuery = graphql`
query PackageDetailScreenGetPackageDetailsQuery($packageId: ID) {
	package(id: $packageId) {
		...PackageDetailView_package
		...PackageStickerGrid_package
	}
}
`

const {Text, View} = glamorous;

export default class PackageDetailsScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
		headerTitleStyle : {textAlign:'center',alignSelf:'center'},
		headerStyle:{
			backgroundColor:'white',
		},
  });

	render() {
		let params = this.props.navigation.state.params;
		return(
				<QueryRenderer
					environment={environment}
					query={PackageDetailsScreenGetPackageDetailsQuery}
					variables={{packageId: params.packageId}}
					render={({error, props}) => {
						if (error) {
							return <ScrollView><Text>{error.message}</Text></ScrollView>
						} else if (props) {
							return(
								<View flexDirection={'column'} justifyContent={'flex-start'} height={'100%'}>
									<PackageDetailView package={props.package}/>
									<ContentLoadingView/>
								</View>
							);
						}
						return <ContentLoadingView/>
					}}
				/>
		);
	}

	
}