/* @flow */

import { StackNavigator } from "react-navigation";
import PackagesScreen from "./screens/packages/PackagesScreen";
import PackageDetailScreen from "./screens/packageDetails/PackageDetailScreen";

export default Main = StackNavigator({
  Packages: {
    screen: PackagesScreen,
    navigationOptions: {
      headerTitle: 'Packages',
    }
  },
  Details: {
    screen: PackageDetailScreen,
  },
});
