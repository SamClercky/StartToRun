import React from "react";
import {Text, View, StyleSheet} from "react-native";

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      timer: null,
      m: 0,
      s: 0
    };

    this.onTick = this.onTick.bind(this);
    this.onStop = this.onStop.bind(this);
    this.resetAll = this.resetAll.bind(this);
  }

  componentDidMount() {
    // call at start
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("new props");

    if (nextProps.pauze == true) {
      if (this.state.timer != null) {
        clearInterval(this.state.timer);
      }
    } else {
      // start interval 1s
      const timer = setInterval(this.onTick, 1000);
      if (this.props.listOfInput === nextProps.listOfInput) {
        this.setState({timer: timer});
      } else {
        this.setState({
          counter: 0,
          m: 0,
          s: 0,
          timer: timer
        });
      }
    }

    if (nextProps.reset == true) {
      this.resetAll();
    }
  }

  resetAll() {
    this.setState({counter: 0, m: 0, s: 0});
  }

  onTick() {
    let newTime = this.getNewTime(
      this.state.m,
      this.state.s
    );
    let counter = this.state.counter;

    if (newTime == false) {
      if (this.state.counter < this.props.listOfInput.length) {
        //console.log(parseInt(this.props.listOfInput[this.state.counter].value));
        newTime = {};
        newTime.m = parseInt(this.props.listOfInput[this.state.counter].value);
        newTime.s = 0;
        // set counter for next time
        counter++;
      }
      if (this.state.counter == this.props.listOfInput.length) {
        this.onStop();
      }
    }
    console.log({
      counter: counter,
      m: newTime.m,
      s: newTime.s
    });

    newTime.m = newTime.m ? newTime.m : 0;
    newTime.s = newTime.s ? newTime.s : 0;
    this.setState({
      counter: counter,
      m: newTime.m,
      s: newTime.s
    });
  }

  onStop() {
    if (this.state.timer != null) {
      clearInterval(this.state.timer);
    }

    if (typeof this.props.onStop == "function") {
      this.props.onStop();
    }
  }

  // minus 1s of if 0 => false
  getNewTime(m, s) {
    //console.log({m: m, s: s});
    if (s <= 0) {
      if (m <= 0) {
        console.log("false returned");
        return false;
      } else {
        m--;
      }
    } else {
      s--;
    }
    //console.log({m: m, s: s});
    return {m: m, s: s};
  }

  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.fontStyle}>
          {this.state.m}
        </Text>
        <Text style={styles.fontSmaleStyle}>
          min
        </Text>
        <Text style={styles.fontStyle}>
          {this.state.s}
        </Text>
        <Text style={styles.fontSmaleStyle}>
          sec
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 64,
    color: "#333333"
  },
  fontSmaleStyle: {
    fontSize: 16,
    color: "#bbb",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
