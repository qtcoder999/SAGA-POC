import React from "react";
import "../App.css"

class SelectDropDown extends React.Component {
  render() {
    return (
      <div>
        <select onMouseOver={this.props.onChangeHandler}>
          {this.props.registryname.map(items => (
            <option>{items}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectDropDown;
