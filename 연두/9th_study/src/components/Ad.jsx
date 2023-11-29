import React from "react";
//  import { ReactComponent as Banner } from "../img/image.svg";
import AdImage from "../img/adimage.svg";

export default function Ad(props) {
  return <>{props.show && <img src={AdImage} width="100%" />}</>;
}

//   return <>{props.show && <Banner width="100%" />}</>;
