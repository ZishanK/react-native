import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Body
} from "native-base";
import { SafeAreaView } from "react-navigation";
import { GET_QUIZES } from "../../../lib/queries/account";
import { Query } from "react-apollo";
import firebase from "react-native-firebase";
import { Headers } from "../../components";
import LoadingComponent from "../../components/LoadingComponent";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.LoggedUser = firebase.auth().currentUser;
    console.log("logged user", this.LoggedUser);
  }

  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }
  Logout = () => {
    this.setState({ loading: true });
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          this.setState({ loading: false });
          alert("Signed Out Successfully");
          this.props.navigation.navigate("Auth");
        },
        function(error) {
          this.setState({ loading: false });
          console.error("Sign Out Error", error);
        }
      );
  };
  render() {
    return (
      <SafeAreaView
        style={{ backgroundColor: "#FFF", flex: 1 }}
        forceInset={{ top: "never" }}
      >
        <LoadingComponent show={this.state.loading} />
        <Query query={GET_QUIZES}>
          {({ loading, error, data }) => {
            console.log("Data: ", data);
            if (loading) {
              return <LoadingComponent show={true} />;
            }
            if (data) {
              return (
                <Container>
                  <Headers.TitleHeader
                    title="Quizes"
                    dashboard={true}
                    onLogoutPress={() => this.Logout()}
                  />
                  <Content>
                    <List>
                      <ListItem>
                        <Left>
                          <Text>Id</Text>
                        </Left>
                        <Body>
                          <Text>Total Marks</Text>
                        </Body>
                        <Right>
                          <Text>Obtaining Marks</Text>
                        </Right>
                      </ListItem>
                    </List>
                    {data.quizes.map(quiz => {
                      return (
                        <ListItem key={quiz.id}>
                          <Left>
                            <Text>{quiz.id}</Text>
                          </Left>
                          <Body>
                            <Text>{quiz.total_marks}</Text>
                          </Body>
                          <Right>
                            <Text style={{ paddingRight: 30 }}>
                              {quiz.obtaining_marks}
                            </Text>
                          </Right>
                        </ListItem>
                      );
                    })}
                  </Content>
                </Container>
              );
            }

            if (error) {
              console.log("ABC", error);
              return (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text>{error.Error}</Text>
                </View>
              );
            }
          }}
        </Query>
      </SafeAreaView>
    );
  }
}

export default Dashboard;
