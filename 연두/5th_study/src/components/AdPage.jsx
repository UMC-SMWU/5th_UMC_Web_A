import React from "react";
import Ad from "./Ad";

function ShowAd(props) {
  return <button onClick={props.onClick}>광고보기</button>;
}
function HideAd(props) {
  return <button onClick={props.onClick}>광고 그만보기</button>;
}
let cnt = 0;
let existence = true;
class AdPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.state = { isAdshowed: existence };
  }
  handleToggleClick() {
    cnt++;
    existence = cnt % 2 !== 0 ? false : true;
    this.setState({ isAdshowed: existence });
  }
  render() {
    const isAdshowed = this.state.isAdshowed;
    return (
      <>
        <Ad show={isAdshowed}></Ad>
        {isAdshowed ? (
          <HideAd onClick={this.handleToggleClick}></HideAd>
        ) : (
          <ShowAd onClick={this.handleToggleClick}></ShowAd>
        )}
      </>
    );
  }
}
export default AdPage;
