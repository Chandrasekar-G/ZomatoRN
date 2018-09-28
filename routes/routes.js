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
      screen: HomePage,
      navigationOptions: {
        title: "Restaurant List",
        headerLeft: null
      }
    }
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#E20025"
      },
      headerTitleStyle: {
        color: "#FFF",
        fontWeight: "100"
      }
    }
  }
);

export default RootStack;
