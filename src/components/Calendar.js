import React from "react";
import Calend, {
  CalendarView,
  OnEventClickData,
  OnNewEventClickData,
  ShowMoreMonthData,
  OnPageChangeData,
  OnSelectViewData,
} from "calend"; // import component
import "calend/dist/styles/index.css"; // import styles

function Calendar() {
  return (
    <div>
      <Calend
        onEventClick={onEventClick}
        onNewEventClick={onNewEventClick}
        events={[]}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        disabledViews={[CalendarView.DAY]}
        onSelectView={onSelectView}
        selectedView={selectedView}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default Calendar;
