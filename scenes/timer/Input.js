import React from "react";
import {View, TextInput, TouchableOpacity, Text, StyleSheet} from "react-native";

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
    this.onTextChanged = this.onTextChanged.bind(this);

    this.id = this.props.id;

    /*this.state = {
      value: this.props.value
    };*/
  }

  onDelete() {
    if (typeof this.props.onDelete == "function") {
      this.props.onDelete(this.id);
    }
  }
  onTextChanged(e: string) {
    if (typeof this.props.onChange == "function"){
      this.props.onChange(e, this.id);
    }
    //this.setState({value: e});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.props.value.toString()}
          editable={!this.props.disabled}
          keyboardType="numeric"
          onChangeText={this.onTextChanged} />
        <TouchableOpacity disabled={this.props.disabled} style={this.props.disabled ? styles.buttonDisabled : styles.buttonActive} onPress={this.onDelete}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    padding: 10
  },
  buttonActive: {
    backgroundColor: "red",
    flexDirection: "row",
    flex: 1
  },
  buttonDisabled: {
    backgroundColor: "#a55",
    flexDirection: "row",
    flex: 1
  },
  buttonText: {
    width: "100%",
    height: "100%",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center"
  },
  textInput: {
    flexDirection: "row",
    flex: 5
  }
});
