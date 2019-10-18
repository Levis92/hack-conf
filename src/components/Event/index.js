import React from "react";
import styled from "styled-components";

const EventCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: 60rem;
  box-sizing: border-box;
  padding: 1.5rem;
  text-decoration: none;
  margin-bottom: 1.5rem;
  background: white;
  border: 2px solid #eaeaea;
  border-radius: 4px;
`;

const LabelList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Label = styled.li`
  background: grey;
  color: antiquewhite;
  border-radius: 0.5rem;
  margin: 0.2rem;
  padding: 0.5rem;
  white-space: nowrap;
  font-size: 1.4rem;
`;

const Event = ({ name, type, location, url, labels }) => (
  <EventCard href={url} target="_blank">
    <h2>{name}</h2>
    <h3>{location}</h3>
    <h4>{type}</h4>
    <LabelList>
      {labels
        .sort((prev, next) => (prev < next ? -1 : 1))
        .map(label => (
          <Label key={label}>{label}</Label>
        ))}
    </LabelList>
  </EventCard>
);

export default Event;
