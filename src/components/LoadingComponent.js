import React, { Component } from "react";
import {
  View,
  Modal,
  ActivityIndicator
} from "react-native";
//Make a component
class LoadingComponent extends Component {
  state = {
    name: "A",
    run: 0
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  constructor(props) {
    super(props);
    var namestring = this.props.name;
  }

  render() {
    return (
      <View>
        <Modal
          transparent={true}
          style={{
            flex: 1,

            backgroundColor: "rgba(0,0,0,0.4)"
          }}
          visible={this.props.show}
          onRequestClose={() => {}}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color="#000" />
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = {
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: "#7d7d7d",
    elevation: 2,
    position: "relative"
  },
  imagestyle: {
    fontSize: 20,
    flex: 1,
    resizeMode: "cover"
  },
  textStyle: {
    fontSize: 35,
    fontWeight: "600",
    color: "#7d7d7d"
  }
};
export default LoadingComponent;
