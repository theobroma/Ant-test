import React from 'react';
import PropTypes from 'prop-types';
// import { Card } from 'antd';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Radio } from 'antd';
import format from 'helpers/format';
import dayOfTheWeek from 'helpers/dayOfTheWeek';
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
    currency,
    filter,
  } = props;
  // console.log(props);

  // console.log(currency[0].purchaseRateNB);
  return (
    <StyledTicketCard>
      <Row>
        <Col md={8} className="border-md-right">
          <div className="flex flex-column items-center pa3">
            <div className="airlines-logo">
              <img src="/images/turkish-airlines.jpg" alt="turkish-airlines" />
            </div>
            <Button type="primary" className="f-18 color-white os-semibold w-100">
              Купить за <br />
              {Math.ceil(price / currency[0].purchaseRateNB)}
              <span className="ml2">{filter.currency}</span>
            </Button>
          </div>
        </Col>
        <Col md={16}>
          <div className="pa3">
            <Row>
              <Col md={8}>
                <div className="time">{departure_time}</div>
              </Col>
              <Col md={8} className="flex items-center">
                <div className="flex flex-column items-center">
                  <div className="f-10 color-balihai os-semibold">{stops} пересадки</div>
                  ------------------->
                </div>
              </Col>
              <Col md={8}>
                <div className="time">{arrival_time}</div>
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
                    {format(departure_date, 'DD MMM YYYY')},{dayOfTheWeek(departure_date)}
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
                  <div className="f-10 color-balihai os-semibold">
                    {format(arrival_date, 'DD MMM YYYY')},{dayOfTheWeek(arrival_date)}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </StyledTicketCard>
  );
};

TicketCard.propTypes = {
  arrival_date: PropTypes.string,
  arrival_timee: PropTypes.string,
  carrier: PropTypes.string,
  departure_date: PropTypes.string,
  departure_time: PropTypes.string,
  destination: PropTypes.string,
  destination_name: PropTypes.string,
  origin: PropTypes.string,
  origin_name: PropTypes.string,
  price: PropTypes.number,
  stops: PropTypes.number,
};

export default TicketCard;
