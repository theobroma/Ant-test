import React from 'react';
import PropTypes from 'prop-types';
import TicketCard from './TicketCard';

const TicketsList = (props) => {
  const { tickets, filter } = props;

  const filteredTickets = tickets.filter((ticket) => {
    return filter.stops.includes(ticket.stops);
  });

  const renderTickets = () =>
    filteredTickets.map((ticket) => <TicketCard {...ticket} {...props} />);

  return <div>{renderTickets()}</div>;
};

TicketsList.propTypes = {};

export default TicketsList;
