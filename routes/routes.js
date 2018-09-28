import { createStackNavigator } from "react-navigation";

import LoginPage from "../containers/LoginPage";
import HomePage from "../containers/HomePage";

const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
      navigationOptions: {
        header: () => null
      }
    },
    Home: {
      screen: HomePage
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default RootStack;
