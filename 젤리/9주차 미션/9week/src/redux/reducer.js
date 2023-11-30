import store from "./store";

const initialState = {
  id: "",
  pw: "",
  token: "",
  loading: false,
};

const CHANGE_ID = "CHANGE_ID";
const CHANGE_PW = "CHANGE_PW";
const IS_LOADING = "IS_LOADING";
const ACCESS_TOKEN = "ACCESS_TOKEN";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ID:
      return { ...state, id: action.payload };
    case CHANGE_PW:
      return { ...state, pw: action.payload };
    case IS_LOADING:
      return { ...state, loading: action.payload };
    case ACCESS_TOKEN:
      return { ...state, token: store.getState().auth.token };
    default:
      return state;
  }
};

export default reducer;
