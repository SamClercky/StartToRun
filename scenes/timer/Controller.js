import React from "react";
import {Button, View} from "react-native";

export class Controller extends React.Component {
  static status = {
    play: 0,
    pauze: 1
  }

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
        <Button title="+" onPress={this.onAdd} />
        <Button title="Play" onPress={this.onPauze} />
        <Button title="Stop" onPress={this.onStop} />
      </View>
    );
  }
}
