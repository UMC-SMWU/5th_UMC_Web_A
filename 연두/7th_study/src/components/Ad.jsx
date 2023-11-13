import React from "react";
import { ReactComponent as Banner } from "../img/image.svg";

export default function Ad(props) {
  return <>{props.show && <Banner width="100%" />}</>;
}
