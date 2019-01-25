import React from "react";

import SelectDropDown from "../components/SelectDropDown";
import { connect } from "react-redux";


class Display extends React.Component {

  onChangeHandler = e => {
    this.props.ClickAction(e);
    // this.props.filterData(e.target.value);
  };

  render() {
    return (
      <div>

        <SelectDropDown
          data={this.props.data}
          onChangeHandler={this.onChangeHandler}
          registryname={this.props.registryname}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  console.log(state.toJS())
  return state.toJS();
};

const mapDispatchToProps = dispatch => {
  return {
    ClickAction: (e) => {
      dispatch({ type: "CLICK", value: e.target.value});
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
