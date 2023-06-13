import React, { useEffect, useRef, useState } from 'react'
import './EventBlock.css'

function EventBlock({ event, index }) {

    const eventRef = useRef(null);
    const [eventShow, setEventShow] = useState(false);

    useEffect(() => {
        const eventBlock = eventRef.current;
        eventBlock.setAttribute('event-description', event.description);
    }, [eventRef, event.description]);

    const eventHandler = () => {
        setEventShow(!eventShow);
    }

  return (
    <li className={`event-block ${eventShow ? "_show": ""}`} ref={eventRef} onClick={eventHandler}>
        <div className="event-index__container">
            <span className="event-index">{index}</span>
        </div>
        <div className="event-info__container">
            <h3 className="event-title">{event.title}</h3>
            <div className="event-duration__container">
                <p>Duration</p>
                <span className="event-duration">{event.duration}</span>
            </div>
        </div>
    </li>
  )
}

export default EventBlock