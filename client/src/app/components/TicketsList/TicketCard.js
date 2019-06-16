import React from 'react';
import PropTypes from 'prop-types';
// import { Card } from 'antd';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Radio } from 'antd';

import StyledTicketCard from './TicketCard.styled';

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
  return (
    <StyledTicketCard>
      <Row>
        <Col md={8}>col1</Col>
        <Col md={16}>col2</Col>
      </Row>
    </StyledTicketCard>
  );
};

TicketCard.propTypes = {};

export default TicketCard;
