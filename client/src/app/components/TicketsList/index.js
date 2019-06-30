import React from 'react';
import PropTypes from 'prop-types';
import TicketCard from './TicketCard';

const TicketsList = (props) => {
  const { tickets } = props;
  const renderTickets = () => tickets.map((ticket) => <TicketCard {...ticket} {...props} />);

  return <div>{renderTickets()}</div>;
};

TicketsList.propTypes = {};

export default TicketsList;
