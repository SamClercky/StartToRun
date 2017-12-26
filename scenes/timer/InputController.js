import React from "react";
import { FlatList, View, Text } from "react-native";
import { Input } from "./Input.js";
import Swipeout from "react-native-swipeout";

export class InputController extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  onDelete(key: number) {
    if (this.props.disabled) return;
    this.props.onDelete(key);
  }

  onValueChanged(newStr: string, id: number) {
    this.props.onChange(newStr, id);
  }

  renderRow(item) {
    // reset item
    item = item.item;

    const swipeBtn = [{
      text: 'Verwijder',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { this.onDelete(item.key)}
    }];

    return (
      <Swipeout right={swipeBtn}
        autoClose={true}
        backgroundColor="transparent">
          <Input
            value={item.value}
            id={item.key}
            disabled={this.props.disabled}
            onDelete={(e) => this.onDelete(e)}
            onChange={this.onValueChanged} />
        </Swipeout>
    );
  }

  render() {
    return (
      <View style={this.props.style}>
        <Text>
          {(this.props.listOfInput.length == 0) ? "Voeg een nieuw veld toe door onderaan op het + teken te klikken" : ""}
        </Text>
        <FlatList
          style={this.props.style}
          data={this.props.listOfInput}
          renderItem={this.renderRow}
          extraData={this.props} />
      </View>
    );
  }
}
