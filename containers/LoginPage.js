import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  login = () => {
    console.log(this.state);
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/logo.png")}
        />
        <KeyboardAvoidingView
          style={styles.loginContainer}
          behavior="padding"
          enabled
        >
          <TextInput
            style={styles.input}
            placeholder="Email Id"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
          <TouchableHighlight
            onPress={this.login}
            style={styles.button}
            underlayColor="#EC9EA9"
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F6E8EA"
  },
  logo: {
    width: Dimensions.get("window").width / 4,
    alignSelf: "center"
  },
  loginContainer: {
    marginLeft: 30,
    marginRight: 30
  },
  input: {
    height: 50,
    paddingLeft: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E20025",
    borderRadius: 10
  },
  button: {
    backgroundColor: "#E20025",
    padding: 10,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF"
  }
});
