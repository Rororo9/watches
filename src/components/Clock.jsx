import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './Clock.css';

const Clock = ({ cityName, timezoneOffset, onRemove }) => {
    const [time, setTime] = useState(moment().utcOffset(timezoneOffset).format('HH:mm:ss'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(moment().utcOffset(timezoneOffset).format('HH:mm:ss'));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timezoneOffset]);

    return (
        <div className="clock">
            <button className="close-btn" onClick={onRemove}>&times;</button>
            <div>{cityName}</div>
            <div className="time-display">{time}</div>
        </div>
    );
};

export default Clock;
