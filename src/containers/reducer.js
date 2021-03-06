import { fromJS } from "immutable";
const initialState = fromJS({
  data: [],
  registryname: [],
  dropdownOption: "",
  filteredArr: []
});

const filterSpecial = (object, str) => {
  if (object.data.other !== "undefined") {
    return object.data.other.filter(function(item) {
      return item.registryName === str;
    });
  }
  return {};
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY_VALUE":
      return state.set("dropdownOption", action.value);

    case "SET_DATA_FROM_API":
      return state
        .set("data", action.value)
        .set(
          "registryname",
          action.value.data.other.map(item => item.registryName)
        );

    case "FILTERDATA":
      return state.set(
        "filteredArr",
        filterSpecial(state.get("data"), state.get("dropdownOption"))
      );

    default:
      return state;
  }
};

export default myReducer;
