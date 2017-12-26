import React from 'react';
import {Header} from "./Header.js";
import {Controller} from "./Controller.js";
import {InputController} from "./InputController";
import { View, StyleSheet } from 'react-native';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    // bind functions
    this.onAdd = this.onAdd.bind(this);
    this.onPauze = this.onPauze.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onValueChanged = this.onValueChanged.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onCounterStopped = this.onCounterStopped.bind(this);

    // local variables
    this.state = {
      listOfInput: [{key: 0, value: 50}, {key: 1, value:10}],
      pauze: true,
      reset: false
    };
  }

  onAdd() {
    let list = this.state.listOfInput;
    let key;
    if (list.length == 0) {
      key = 0;
    } else {
      key = list[list.length-1].key+1;
    }
    list.push({
      key: key,
      value: 0
    });
    this.setState({listOfInput: list});
  }

  onPauze(e) {
    // e:boolean => do we have to Pauze
    this.setState({
      pauze: !this.state.pauze,
      reset: false
    });
  }

  onStop() {
    this.setState({
      pauze: true,
      reset: true
    });
  }

  onValueChanged(newStr: string, id: number) {
    let list = [];
    this.state.listOfInput.forEach((item) => {
      if (id == item.key) {
        list.push({key: item.key, value: newStr});
      } else {
        list.push({key: item.key, value: item.value});
      }
    });

    this.setState({listOfInput: list});
  }

  onDelete(rowData) {
    let list = this.state.listOfInput; // copy list
    list = list.filter((item: object) => {
      return rowData !== item.key;
    });
    this.setState({listOfInput: list});
  }

  onCounterStopped() {
    this.setState({pauze: true});
  }

  render() {
    console.log(this.state);

    return (
      <View style={styles.container}>
        <Header
          style={styles.header}
          listOfInput={this.state.listOfInput}
          pauze={this.state.pauze}
          reset={this.state.reset}
          onStop={this.onCounterStopped} />
        <InputController
          style={styles.inputController}
          listOfInput={this.state.listOfInput}
          disabled={!this.state.pauze && !this.state.reset}
          onDelete={this.onDelete}
          onChange={this.onValueChanged}
          />
        <Controller
          style={styles.controller}
          onAdd={this.onAdd}
          onPauze={this.onPauze}
          onStop={this.onStop}
          reset={this.state.reset}
          pauze={this.state.pauze}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  header: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: "20%",
    paddingRight: "20%",
  },
  inputController: {
    flex: 1,
    width: "100%",
    backgroundColor: "#dddddd"
  },
  controller: {
    height: 75,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "yellow"
  }
});
