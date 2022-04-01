import React from "react";

export default function Header(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = new Date().toLocaleString("en-US", { month: "short" });
  let year = newDate.getFullYear();
  let day = new Date().toLocaleString("en-US", { weekday: "long" });
  return (
    <div className="headingdate">
      <div className="leftheading">
        <div className="datewrapper">
          <div className="date">{date}</div>
        </div>
        <div className="monthwrapper">
          <div className="month">{month}</div>
          <div className="year">{year}</div>
        </div>
      </div>
      <div className="daywrapper">
        <div className="day">{day}</div>
      </div>
    </div>
  );
}
