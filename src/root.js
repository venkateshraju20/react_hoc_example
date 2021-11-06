import React from "react";
import { Provider } from "react-redux";

import { store } from "reducers";

export default function Root(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
