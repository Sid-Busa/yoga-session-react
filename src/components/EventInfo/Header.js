import React, { Fragment ,memo} from "react";
import "./style.css";
const Header = () => {
  return (
    <Fragment>
      <div className="header_logo">
        <p>Life Yoga</p>
      </div>
      <div className="header_headline">
        <h2>Ashtanga Yoga Live Session</h2>
      </div>
    </Fragment>
  );
};

export default memo(Header);
