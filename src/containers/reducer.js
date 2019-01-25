import { fromJS } from "immutable";
const initialState = fromJS({
  data: [],
  registryname: [],
  dropdownOption: "",
  filteredArr: []
});

const filterSpecial = (object, str) => {
  return object && object.data.others.filter(function(item) {
    return item.registryName === str;
  });
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY_VALUE":
      console.log(action.value);
      return state.set("dropdownOption", action.value);

    case "SET_DATA_FROM_API":
      return state
        .set("data", action.value)
        .set(
          "registryname",
          action.value.data.other.map(item => item.registryName)
        );

    case "FILTERDATA":
    if(state.get("data")){
      state.set(
        "filteredArr",
        filterSpecial(state.get("data"), state.get("dropdownOption"))
      );
    }

      break;

    default:
      return state;
  }
};

export default myReducer;
