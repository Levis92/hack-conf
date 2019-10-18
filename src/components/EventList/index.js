import React from "react";

import Event from "../Event";

const EventList = ({ events }) => (
  <>
    {events
      .sort((prev, next) => (prev.name < next.name ? -1 : 1))
      .map(event => (
        <Event key={event.name} {...event} />
      ))}
  </>
);

export default EventList;
