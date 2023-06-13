import React from 'react'
import EventBlock from '../components/EventBlock'
import { events } from '../data/events-data'

function Main() {
  return (
    <div className='events__main'>
        <div className='events__header'>
            <h1 className='events__title'>Upcoming Events</h1>
        </div>
        <div className='events-list__container'>
            <ul className='events__list'>
                {
                    events.map((event, index) => {
                        return <EventBlock key={index} index={index+1} event={event} />
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Main