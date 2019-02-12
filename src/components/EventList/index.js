import React from 'react';

import Event from '../Event';

const EventList = ({ events }) => (
  <>
    {events.map(event => <Event key={event.name} { ...event } />)}
  </>
);

export default EventList;