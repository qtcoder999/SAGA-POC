import React from "react";
import "../App.css"

class SelectDropDown extends React.Component {
  render() {
    return (
      <div>
        <select onChange={this.props.onChangeHandler}>
          {this.props.registryname.map((items,i) => (
            <option key={i}>{items}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectDropDown;
