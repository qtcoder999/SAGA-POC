import React from "react";

import SelectDropDown from "../components/SelectDropDown";
import { connect } from "react-redux";
// import { createSelector } from "reselect";

class Display extends React.Component {
  onChangeHandler = e => {
    this.props.setCategoryValue(e.target.value);
    this.props.filterData();
  };

  componentDidMount = e => {
    this.props.getData();
  };

  render() {
    return (
      <div>
        <SelectDropDown
          data={this.props.data}
          onChangeHandler={this.onChangeHandler}
          registryname={this.props.registryname}
        />
        <table>
          {this.props.filteredArr.map(function(listValue) {
            return (
              <tr>
                <td>{listValue.registryCode}</td>
                <td>{listValue.registryIndex}</td>
                <td>{listValue.registryName}</td>
                <td>{listValue.registryTypeId}</td>
                <td>{listValue.registryImg}</td>
                <td>{listValue.registryTheme}</td>
                <td>{listValue.isListType}</td>
                <td>{listValue.navigationRegistryFlyoutImage}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("@@@Store State", state.toJS());
  return { ...state.toJS() };
};

const mapDispatchToProps = dispatch => ({
  getData: e => dispatch({ type: "GET_DATA_ASYNC" }),
  setCategoryValue: value => dispatch({ type: "SET_CATEGORY_VALUE", value }),
  filterData: () => dispatch({ type: "FILTERDATA" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
