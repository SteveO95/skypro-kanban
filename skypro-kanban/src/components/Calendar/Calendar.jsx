import styled from "styled-components";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { format } from "date-fns";
import { ru } from "date-fns/locale";

const StyledDayPickerWrapper = styled.div`
  & * {
    font-size: 10px;
    color: rgb(148, 166, 190);
  }

  & .rdp-caption_label {
    font-size: 14px;
  }

  & button {
    width: 22px;
    height: 22px;
  }
`;

const Calendar = ({ date, setDate }) => {
  let formatedSelectedDate = format(date, "dd.MM.yyy");

  const updateSelectedDate = (date) => {
    formatedSelectedDate = format(date, "dd.MM.yyy");
    setDate(date);
  };

  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl">Даты</p>

      <StyledDayPickerWrapper>
        <DayPicker mode="single" selected={date} onSelect={(date) => updateSelectedDate(date)} locale={ru} />
      </StyledDayPickerWrapper>

      <div className="calendar__period">
        <p className="calendar__p date-end">
          Срок исполнения: <span className="date-control">{formatedSelectedDate}</span>
        </p>
      </div>
    </div>
  );
};

export default Calendar;
