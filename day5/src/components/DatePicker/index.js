import Calendar from "react-calendar";
import React, { Component } from "react";
import {Title} from "./styles"


const DatePicker = ({date, title, update}) => {
    return(
        <React.Fragment>
            <Title>{title}</Title>
            <Calendar
                onChange={value => update(value)}
                value={date}
            />
        </React.Fragment>
    )
}

export default DatePicker;