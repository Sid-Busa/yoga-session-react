import React from "react";
import "./style.css";
const CardInfo = ({ handlePopUPToggle, eventDetails }) => {
  return (
    <div className="card_info">
      <div className="card_info_time">
        <div className="card_info_time_duration">
          <h4> {eventDetails.time} </h4>
          <p> {eventDetails.duration} mins </p>
        </div>
      </div>
      <div className="card_info_description">
        <h4 className="card_info_title">{eventDetails.session_name}</h4>
        <div>
          <small>description data</small>
        </div>
        <div>
          <small>Group Class on Moxie</small>
        </div>
        <div>
          <small> 5 Attend </small>
        </div>
        <div className="register_popup">
          <small onClick={handlePopUPToggle} style={{ color: "green" }}>
            Register
          </small>
        </div>
      </div>
      <div className="prize">
        {eventDetails.price > 0 ? <b>{eventDetails.price} $ </b> : <b>FREE</b>}
      </div>
    </div>
  );
};

export default CardInfo;
