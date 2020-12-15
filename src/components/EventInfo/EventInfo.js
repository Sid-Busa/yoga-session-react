import React, { Fragment, useState } from "react";
import Card from "../Card";
import Register from "../Model";
import Header from "./Header";
import "./style.css";

const EventInfo = () => {
  const [registerPopup, setRegisterPopup] = useState(false);
  const handlePopUPToggle = () => {
    setRegisterPopup((preState) => !preState);
  };
  return (
    <Fragment>
      {registerPopup && <Register handlePopUPToggle={handlePopUPToggle} />}
      <Header />
      <Card handlePopUPToggle={handlePopUPToggle} />
    </Fragment>
  );
};

export default EventInfo;
