import React from 'react';
import PropTypes from 'prop-types';
// import { Card } from 'antd';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Radio } from 'antd';
import { format, getDay } from 'date-fns';
import turkishImg from 'assets/images/turkish-airlines.jpg';

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
  console.log(props);
  return (
    <StyledTicketCard>
      <Row>
        <Col md={8} className="border-md-right">
          <div className="flex flex-column items-center pa3">
            <div className="airlines-logo">
              <img src="/images/turkish-airlines.jpg" alt="turkish-airlines" />
            </div>
            <Button type="primary" className="f-18 color-white os-semibold w-100">
              Купить <br />
              за {price}
            </Button>
          </div>
        </Col>
        <Col md={16}>
          <div className="pa3">
            <Row>
              <Col md={8}>
                <div className="time">{arrival_time}</div>
              </Col>
              <Col md={8} className="flex items-center">
                <div className="flex flex-column items-center">
                  <div className="f-10 color-balihai os-semibold">{stops} пересадки</div>
                  ------------------->
                </div>
              </Col>
              <Col md={8}>
                <div className="time">{departure_time}</div>
              </Col>
            </Row>
            {/* row2 */}
            <Row>
              <Col md={8}>
                <div className="flex flex-column">
                  <div className="f-10 color-charcoal os-semibold">
                    {origin}, {origin_name}
                  </div>
                  <div className="f-10 color-balihai os-semibold">
                    {format(departure_date, 'DD MMM YYYY')},{getDay(departure_date)}
                  </div>
                </div>
              </Col>
              <Col md={8} className="flex items-center">
                {/* empty */}
              </Col>
              <Col md={8}>
                <div className="flex flex-column">
                  <div className="f-10 color-charcoal os-semibold">
                    {destination}, {destination_name}
                  </div>
                  <div className="f-10 color-balihai os-semibold">{departure_date}</div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </StyledTicketCard>
  );
};

TicketCard.propTypes = {};

export default TicketCard;
