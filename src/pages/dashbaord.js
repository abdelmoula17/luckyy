import React from "react";
import Calendar from "react-calendar/dist/umd/Calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../components/layout/navbar";
import Modal from "../components/modal";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
const Dashbord = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: "event 1", date: "2019-04-01" },
          { title: "event 2", date: "2019-04-02" },
        ]}
      />
    </div>
  );
};

export default Dashbord;
