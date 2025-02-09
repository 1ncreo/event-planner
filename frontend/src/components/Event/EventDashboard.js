import React, { useState, useEffect } from "react";
import axios from "../../services/api";
import { Link } from "react-router-dom";

const EventDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("/events");
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Event Dashboard</h1>
      <Link to="/create-event">Create Event</Link>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>Attendees: {event.attendees.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDashboard;
