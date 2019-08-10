import React, { Component } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Constants } from "../../config";
import styles from "./styles";
import { Headers, Misc, Forms } from "../../components";
import firebase from "react-native-firebase";
import LoadingComponent from "../../components/LoadingComponent";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: "",
      password: "",
      email: "",
      passwordError: false,
      emailError: false,
      emailErrorText: Constants.EMAIL_EMPTY_ERROR,
      passwordErrorText: Constants.PASSWORD_INVALID_ERROR,
      currentUserToken: "",
      isLoading: false
    };
  }

  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  login = () => {
    // this.props.navigation.navigate("App");
    if (this.state.email == "") {
      this.setState({
        emailError: true,
        emailErrorText: Constants.EMAIL_EMPTY_ERROR
      });
    } else {
      if (this.ValidateEmail(this.state.email) == false) {
        this.setState({
          emailError: true,
          emailErrorText: Constants.EMAIL_INVALID_ERROR
        });
      }
    }

    if (this.state.password == "") {
      this.setState({ passwordError: true });
    }
    if (
      this.state.email != "" &&
      this.state.password != "" &&
      this.ValidateEmail(this.state.email)
    ) {
      this.setState({
        passwordError: false,
        emailError: false,
        isLoading: true
      });
      const { email, password } = this.state;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ isLoading: false });
          this.props.navigation.navigate("App");
        })
        .catch(error => {
          console.log("error:: ", error);
          this.setState({ isLoading: false });
          alert(
            "Error: There is no user record corresponding to this identifier"
          );
        });
    }
  };
  loginSuccess = async () => {
    this.props.navigation.navigate("App");
  };

  navigateToRegister() {
    this.resetState();
    this.props.navigation.navigate("_register");
  }

  resetState() {
    this.setState({
      mobileNumber: "",
      password: ""
    });
  }
  onEmailChange(text) {
    this.setState({ email: text, emailError: false });
  }
  onPasswordChange(text) {
    this.setState({ password: text, passwordError: false });
  }

  render() {
    return (
      <SafeAreaView
        style={{ backgroundColor: "#FFF", flex: 1 }}
        forceInset={{ top: "never" }}
      >
        <Headers.TitleHeader
          title={"Login"}
          onBackPress={() => this.props.navigation.goBack()}
        />
        <LoadingComponent show={this.state.isLoading} />
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          keyboardOpeningTime={0}
        >
          <View style={styles.content}>
            <View
              style={{ alignItems: "center", padding: 15, paddingBottom: 0 }}
            >
              <Misc.AuthTitleSub
                title={"WELCOME"}
                subtitle={"Login With Your Quiz App Account"}
              />
            </View>
            <View style={{ marginTop: 30, paddingLeft: 25, paddingRight: 25 }}>
              <Forms.LoginForm
                emailError={this.state.emailError}
                passwordError={this.state.passwordError}
                emailErrorText={this.state.emailErrorText}
                passwordErrorText={this.state.passwordErrorText}
                email={this.state.email}
                onEmailChange={text => this.onEmailChange(text)}
                password={this.state.password}
                onPasswordChange={text => this.onPasswordChange(text)}
                onCreateAccountPress={() => this.navigateToRegister()}
                onForgetPasswordPress={() =>
                  this.props.navigation.navigate("_resetPassword")
                }
                onSubmitPress={() => this.login()}
              />
              <View
                style={{
                  marginBottom: 20,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

export default Login;
