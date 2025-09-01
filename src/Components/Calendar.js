import React from "react";
import FullCalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import "../CSS/Calendar.css";


const Calendar = () => {
  const api_key = process.env.REACT_APP_CAL_API;
  return (
    <div id="Calendar">
      <FullCalender
        height="100%"
        contentHeight="auto"
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          googleCalendarPlugin,
        ]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        initialView="dayGridMonth"
        editable={false}
        selectable={true}
        selectMirror={true}
        weekends={true}
        dayMaxEvents={true}
        googleCalendarApiKey={api_key}
        events={{
          googleCalendarId: "uconnaiclub@gmail.com",
        }}
      />
    </div>
  );
};
export default Calendar;
