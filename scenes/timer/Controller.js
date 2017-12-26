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
        <TouchableHighlight style={styles.lftTouchable} onPress={this.onAdd}>
          <Text style={styles.lftButton}>
            <FontAwesome>{Icons.plus}</FontAwesome>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPauze}>
          <Text>
            <FontAwesome>
              {
                this.props.pauze ? Icons.play : Icons.pause
              }
            </FontAwesome>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onStop}>
          <Text>
            <FontAwesome>{Icons.stop}</FontAwesome>
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lftButton: {
    color: "white",
    height: "50%",
    backgroundColor: "blue",
    width: "100%",
  },
  lftTouchable: {
    width: "50%",
    height: "100%"
  }
});
