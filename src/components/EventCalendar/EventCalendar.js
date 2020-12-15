import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import API from "../Axios/axios";
import Calendar from "../Calendar/Calendar";
import "./style.css";

const EventCalendar = () => {
  const [dateContext, setDateContext] = useState(moment());
  const [currentMonthData, setCurrentMonthData] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const dispatch = useDispatch();

  // get all event for dateContext(selected months)
  useEffect(() => {
    const getEventDates = async () => {
      const year = moment(dateContext).get("year");
      const month = moment(dateContext).get("month");
      try {
        setSelectedDays([]);
        const datesData = await API.get(`/timing/${year}/${month + 1}`);
        if (datesData.status) {
          let daysArray = [];
          datesData.timing.dates.map((item, index) => {
            daysArray.push(item.date);
          });
          setCurrentMonthData(datesData.timing);
          setSelectedDays(daysArray);

          dispatch({
            type: "SET_EVENT_LIST",
            payload: {
              year,
              day: datesData.timing.dates[0].date,
              monthName: moment(datesData.timing.month, "MM").format("MMMM"),
              weekName: moment(
                `${year}-${datesData.timing.month}-${datesData.timing.dates[0].date}`
              ).format("dddd"),
              eventList: datesData.timing.dates[0].data,
            },
          });
        } else {
          setCurrentMonthData(null);
        }
      } catch (e) {
        if (!e.status) {
          console.log(e.message); //not containe any date
        }
        setSelectedDays([]);
        setCurrentMonthData(null);
        dispatch({
          type: "SET_EVENT_LIST",
          payload: {
            year,
            monthName: moment(month + 1, "MM").format("MMMM"),
            day: null,
            weekName: null,
            eventList: [],
          },
        });
      }
    };
    getEventDates();
  }, [dateContext]);

  // chnage datacontext based on move to next or previous month
  const handleChange = (data) => {
    setDateContext(data);
  };

  // get event list for selected day
  const handleDaySelection = (day) => {
    const year = moment(dateContext).get("year");
    const month = moment(dateContext).get("month");

    if (currentMonthData) {
      const perticularDayInfo = currentMonthData.dates.find((item) => {
        if (item.date == day) {
          return item;
        }
      });
      if (perticularDayInfo) {
        dispatch({
          type: "SET_EVENT_LIST",
          payload: {
            year,
            day: perticularDayInfo.date,
            monthName: moment(month + 1, "MM").format("MMMM"),
            weekName: moment(
              `${year}-${month + 1}-${perticularDayInfo.date}`
            ).format("dddd"),
            eventList: perticularDayInfo.data,
          },
        });
      } else {
        dispatch({
          type: "SET_EVENT_LIST",
          payload: {
            year,
            monthName: moment(month + 1, "MM").format("MMMM"),
            day,
            weekName: moment(`${year}-${month + 1}-${day}`).format("dddd"),
            eventList: [],
          },
        });
      }
    }
  };

  return (
    <div className="timing">
      <div className="timing_header">
        <p> Select a Date & Time </p>
      </div>
      <Calendar
        selectedDays={selectedDays}
        dateContext={dateContext}
        handleChange={handleChange}
        handleDaySelection={handleDaySelection}
      />
    </div>
  );
};

export default EventCalendar;
