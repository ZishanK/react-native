import React, { Component } from "react";
import { View, Image, StatusBar } from "react-native";
import styles from "./styles";
import firebase from "react-native-firebase";
class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.props.navigation.navigate("App");
          this.setState({ loading: false });
        } else {
          this.props.navigation.navigate("Auth");
          this.setState({ loading: false });
        }
      });
    }, 3000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#141d21" />
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/splash.png")}
              style={styles.image}
              resizeMode={"stretch"}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Splash;
