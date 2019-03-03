import React from 'react';
import styled from 'styled-components';

const EventCard = styled.a`
  border-radius: 5px;
  box-shadow: 2px 2px 15px #afafaf;
  display: block;
  width: 95%;
  max-width: 600px;
  box-sizing: border-box;
  padding: 10px;
  text-decoration: none;
  color: #333;
  margin: 15px 0;
  background: #fafafa;
`

const LabelList = styled.ul`
  list-style: none;
  display: flex;
`

const Label = styled.li`
  background: grey;
  color: antiquewhite;
  border-radius: 5px;
  margin: 2px;
  padding: 5px;
  white-space: nowrap;
`

const Event = ({ name, type, location, url, labels }) => (
  <EventCard href={url} target="_blank">
    <h2>{name}</h2>
    <h3>{location}</h3>
    <h4>{type}</h4>
    <LabelList>
      {labels.map(label => <Label key={label}>{label}</Label>)}
    </LabelList>
  </EventCard>
)

export default Event;
