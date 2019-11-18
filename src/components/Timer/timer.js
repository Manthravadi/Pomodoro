import React, { useState } from 'react';

export default timer = (props) => {
    const [timer, setTimer] = useState(props.timer);

    let timerID = null;

    start = () => {
        timerID = Window.setTimeout(() => {props.onTimerEnds}, timer);
    };

    stop = () => {
        if (timerID != null) {
            Window.clearTimeout(timerID);
        }
    }
    return (
        <div>
            
        </div>
    );
}