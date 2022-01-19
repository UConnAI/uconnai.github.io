import React from "react";
import FullCalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import iCalendarPlugin from "@fullcalendar/icalendar";
const Calendar = () => {
  return (
    <FullCalender
      plugins={[
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        iCalendarPlugin,
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
      eventClick={handleEventClicks}
      events={{
        url: "https://calendar.google.com/calendar/ical/uconnaiclub%40gmail.com/public/basic.ics",
        format: "ics",
      }}
    />
  );
};
export default Calendar;

function handleEventClicks(clickInfo) {
  console.log(clickInfo);
}
