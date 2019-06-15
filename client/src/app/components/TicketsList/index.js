import React from 'react';
import PropTypes from 'prop-types';
import TicketCard from './TicketCard';

const TicketsList = (props) => {
  console.log(props);
  return (
    <div>
      <TicketCard />
    </div>
  );
};

TicketsList.propTypes = {};

export default TicketsList;
