import React from 'react';
import PropTypes from 'prop-types';
import StyledTicketsFilter from './TicketsFilter.styled';

const TicketsFilter = (props) => {
  console.log(props);
  return (
    <StyledTicketsFilter>
      <div className="pa3">StyledTicketsFilter</div>
    </StyledTicketsFilter>
  );
};

TicketsFilter.propTypes = {};

export default TicketsFilter;
