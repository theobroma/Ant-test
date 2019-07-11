import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Radio } from 'antd';
import shortid from 'shortid';
import TicketCard from './TicketCard';

const TicketsList = (props) => {
  const { tickets, filter } = props;

  const filteredTickets = tickets.filter((ticket) => {
    return filter.stops.includes(ticket.stops);
  });

  const renderTickets = () =>
    filteredTickets.map((ticket) => <TicketCard key={shortid.generate()} {...ticket} {...props} />);

  return (
    <Fragment>
      <Row>
        <Col md={16}>{/* TODO sort */}</Col>
        <Col md={8} className="flex justify-end">
          <div>Количество :{filteredTickets.length}</div>
        </Col>
      </Row>
      {renderTickets()}
    </Fragment>
  );
};

TicketsList.propTypes = {};

export default TicketsList;
