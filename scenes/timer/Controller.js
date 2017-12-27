import React from "react";
import {TouchableHighlight, View, Text, StyleSheet} from "react-native";
import FontAwesome, { Icons } from 'react-native-fontawesome';

export class Controller extends React.Component {
  constructor(props) {
    super(props);

    this.onAdd = this.onAdd.bind(this);
    this.onPauze = this.onPauze.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  onAdd() {
    this.props.onAdd();
  }

  onPauze() {
    this.props.onPauze();
  }

  onStop() {
    this.props.onStop();
  }

  render() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight style={styles.touchable} onPress={this.onAdd} disabled={!this.props.pauze}>
          <Text style={[styles.buttonText, (!this.props.pauze) ? styles.zijButtonTextDisabled : styles.zijButtonText]}>
            <FontAwesome>{Icons.plus}</FontAwesome>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchable} onPress={this.onPauze}>
          <Text style={[styles.hftButtonText, styles.buttonText]}>
            <FontAwesome>
              {
                this.props.pauze ? Icons.play : Icons.pause
              }
            </FontAwesome>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchable} onPress={this.onStop}>
          <Text style={[styles.buttonText, styles.zijButtonText]}>
            <FontAwesome>{Icons.stop}</FontAwesome>
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    flexDirection: "row",
    flex: 1,
    height: "100%"
  },
  buttonText: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 32
  },
  zijButtonText: {
    backgroundColor: "white",
    color: "#333"
  },
  zijButtonTextDisabled: {
    backgroundColor: "white",
    color: "#aaa"
  },
  hftButtonText: {
    backgroundColor: "#aaf",
    color: "white",
    borderRadius: 100
  }
});
