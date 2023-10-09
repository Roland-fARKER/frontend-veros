import React, { Component } from "react";
import { InputSwitch } from "primereact/inputswitch";

export class InputSwitchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: true,
    };
  }

  render() {
    return (
      <div className="card">
        <InputSwitch
          checked={this.state.checked1}
          onChange={(e) => this.setState({ checked1: e.value })}
        />
      </div>
    );
  }
}
