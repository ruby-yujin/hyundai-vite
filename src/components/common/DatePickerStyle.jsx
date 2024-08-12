import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { CalendarDays } from "lucide-react";
import { ko } from "date-fns/locale";

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div className="custom-input" onClick={onClick} ref={ref}>
    <span>{value}</span>
    <CalendarDays size={20} />
  </div>
));

function DateRangePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (date > endDate) {
      setEndDate(date);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <DatePickerStyleWrap>
      <DatePickerItem>
        <DatePickerStyle
          locale={ko}
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy.MM.dd"
          customInput={<CustomInput />}
        />
      </DatePickerItem>

      <Separator>~</Separator>
      <DatePickerItem>
        <DatePickerStyle
          locale={ko}
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="yyyy.MM.dd"
          customInput={<CustomInput />}
        />
      </DatePickerItem>
    </DatePickerStyleWrap>
  );
}

const DatePickerStyleWrap = styled.div`
  width: calc(100% - 380px);
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  .custom-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    background: #ededf4;
    text-indent: 20px;
    span {
      font-size: 14px;
    }
    svg {
      width: 32px;
      height: 32px;
      background: #295095;
      padding: 5px 0;
      color: #fff;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    input {
      border: none;
      color: #000;

      font-size: 14px;
      margin-left: 5px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const DatePickerItem = styled.div`
  width: 270px;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
`;

const DatePickerStyle = styled(DatePicker)`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  .react-datepicker__month-container {
    width: 100%;
  }
`;

const Separator = styled.span`
  font-size: 16px;
`;

export default DateRangePicker;
