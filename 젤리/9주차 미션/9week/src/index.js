import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Provider을 하나의 컴포넌트로 생각하면 쉽다.
// React로 작성된 컴포넌트들을 Provider 안에 넣으면 하위 컴포넌트들이 Provider을 통해 redux store에 접근이 가능해진다.
