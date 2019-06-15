import React from 'react';
import PropTypes from 'prop-types';

const TicketCard = (props) => {
  const {
    arrival_date,
    arrival_time,
    carrier,
    departure_date,
    departure_time,
    destination,
    destination_name,
    origin,
    origin_name,
    price,
    stops,
  } = props;
  return <div>TicketCard</div>;
};

TicketCard.propTypes = {};

export default TicketCard;
