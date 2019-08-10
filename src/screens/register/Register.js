import React, { Component } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Constants } from "../../config";
import styles from "./styles";
import { Headers, Misc, Forms } from "../../components";
import firebase from "react-native-firebase";
import LoadingComponent from "../../components/LoadingComponent";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPassword: "",
      isLoading: false,
      asswordError: false,
      confirmPasswordError: false,
      emailError: false,
      fnameError: false,
      lnameError: false,
      emailErrorText: "",
      confirmPasswordErrorText: Constants.CONFIRM_PASSWORD_ERROR,
      passwordErrorText: Constants.PASSWORD_INVALID_ERROR,
      lnameErrorText: Constants.LNAME_ERROR,
      fnameErrorText: Constants.FNAME_ERROR
    };
  }
  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
  register = () => {
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
    } else {
      if (this.state.password.length < 6) {
        this.setState({
          passwordError: true,
          passwordErrorText: Constants.PASSWORD_LENGTH_ERROR
        });
      }
    }
    if (
      this.state.confirmPassword == "" ||
      this.state.confirmPassword != this.state.password
    ) {
      this.setState({ confirmPasswordError: true });
    }
    if (this.state.fname == "") {
      this.setState({ fnameError: true });
    }
    if (this.state.lname == "") {
      this.setState({ lnameError: true });
    }
    if (
      this.state.email != "" &&
      this.state.password != "" &&
      this.state.confirmPassword == this.state.password &&
      this.state.fname != "" &&
      this.state.lname != "" &&
      this.ValidateEmail(this.state.email)
    ) {
      this.setState({ isLoading: true });
      const { email, password, fname } = this.state;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          this.setState({ isLoading: false });
          alert("Account Created Successfully For " + email);
          this.reset();
        })
        .catch(error => {
          this.setState({ isLoading: false });
          alert(error.message);
        });
    }
  };
  reset() {
    this.setState({
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  }
  render() {
    return (
      <SafeAreaView
        style={{ backgroundColor: "#FFF", flex: 1 }}
        forceInset={{ top: "never" }}
      >
        <LoadingComponent show={this.state.isLoading} />
        <Headers.BackButtonHeader
          title="Register"
          onBackPress={() => this.props.navigation.goBack()}
        />

        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          keyboardOpeningTime={0}
        >
          <View style={styles.content}>
            <View style={{ alignItems: "center", padding: 15 }}>
              <Misc.AuthTitleSub
                title={"Hi There"}
                subtitle={"Create Quiz App account"}
              />
            </View>
            <View style={{ marginTop: 20, paddingLeft: 25, paddingRight: 25 }}>
              <Forms.RegisterForm
                fname={this.state.fname}
                fnameError={this.state.fnameError}
                lnameError={this.state.lnameError}
                passwordError={this.state.passwordError}
                confirmPasswordError={this.state.confirmPasswordError}
                emailError={this.state.emailError}
                lname={this.state.lname}
                fnameErrorText={this.state.fnameErrorText}
                lnameErrorText={this.state.lnameErrorText}
                emailErrorText={this.state.emailErrorText}
                passwordErrorText={this.state.passwordErrorText}
                confirmPasswordErrorText={this.state.confirmPasswordErrorText}
                onFNameChange={text =>
                  this.setState({ fname: text, fnameError: false })
                }
                onLNameChange={text =>
                  this.setState({ lname: text, lnameError: false })
                }
                mobileNumber={this.state.email}
                onEmailChange={text =>
                  this.setState({ email: text, emailError: false })
                }
                password={this.state.password}
                confirmPassword={this.state.confirmPassword}
                onPasswordChange={text =>
                  this.setState({ password: text, passwordError: false })
                }
                onconfirmPasswordChange={text =>
                  this.setState({
                    confirmPassword: text,
                    confirmPasswordError: false
                  })
                }
                onSubmitPress={() => this.register()}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

export default Register;
