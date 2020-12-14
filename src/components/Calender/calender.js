import React, { useState } from "react";
import moment from "moment";
import "./style.css";

const Calender = ({ selectedDays, dateContext,handleChange,handleDaySelection}) => {
  
  const getWeekdaysShort = moment.weekdaysShort();
  
  const year = () => {
    return dateContext.format("Y");
  };
  const month = () => {
    return dateContext.format("MMMM");
  };
  const daysInMonth = () => {
    return dateContext.daysInMonth();
  };
  const currentDate = () => {
    return dateContext.get("date");
  };
  const currentDay = () => {
    return dateContext.format("D");
  };
  const firstDayOfMonth = () => {
    let dateContext1 = dateContext;
    let firstDay = moment(dateContext1).startOf("month").format("d");
    return firstDay;
  };

  const weekdays = getWeekdaysShort.map((day) => {
    return (
      <td key={day} className="week-day">
        {day}
      </td>
    );
  });

  let blanks = [];

  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(
      <td key={i * 10} className="emptySlot">
        {" "}
        {""}{" "}
      </td>
    );
  }
  const identifySelectedDay = (day) =>{
    let flag = false
    selectedDays.map((item) =>{
      if(item == day ){
        flag = true
      }
    })
    if(flag){
      return true
    }else{
      return false
    }
  }
  let dayInMonth = [];
  for (let day = 1; day <= daysInMonth(); day++) {
    let className = identifySelectedDay(day) ? "day current-day" : "day";
    dayInMonth.push(
      <td key={day} className={className} onClick={() => handleDaySelection(day)} >
        <span> {day} </span>
        {day == currentDay() ? (<i style={{display:'block',fontSize:'20px',fontWeight:'bold',position:'relative',top:"-15px" }} > . </i>) : <i style={{display:'block',visibility:'hidden'}} > . </i> }
      </td>
    );
  }

  let totalSlots = [...blanks, ...dayInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      let insertRow = cells.slice();
      rows.push(insertRow);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      let insertRow = cells.slice();
      rows.push(insertRow);
    }
  });

  let trElems = rows.map((d, i) => {
    return <tr key={i * 100}  > {d}</tr>;
  });

  const previousMonth = () => {
    let dateContext1 = Object.assign({}, dateContext);
    const dateContext2 = moment(dateContext1).subtract(1, "month");
    console.log("previous", dateContext2.get("month"));
    handleChange(dateContext2);
  };
  const nextMonth = () => {
    let dateContext1 = Object.assign({}, dateContext);
    const dateContext2 = moment(dateContext1).add(1, "month");
    console.log("next", dateContext2.get("month"));
    handleChange(dateContext2);
  };

  return (
    <div className="calendar-container">
      <table className="calendar">
        <thead>
          <tr className="calendar-header">
            <td colSpan="5">
              <span style={{ padding: 5 }}> {month()} </span>
              <span style={{ padding: 5 }}> {year()} </span>
            </td>
            <td colSpan="2">
              <i
                className="prew fa fas fa-angle-left"
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  padding: "0px 25px",
                }}
                onClick={previousMonth}
              >
                {" "}
              </i>
              <i
                className="prew fa fas fa-angle-right"
                style={{ fontSize: "30px", cursor: "pointer" }}
                onClick={nextMonth}
              >
                {" "}
              </i>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>{weekdays}</tr>
          {trElems}
        </tbody>
      </table>
    </div>
  );
};

export default Calender;
