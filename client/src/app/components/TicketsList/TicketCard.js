import React from 'react';
import PropTypes from 'prop-types';
// import { Card } from 'antd';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Radio } from 'antd';
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
              за 21 000Р
            </Button>
          </div>
        </Col>
        <Col md={16}>
          <div className="pa3">
            <Row>
              <Col md={8}>
                <div className="time">09:25</div>
              </Col>
              <Col md={8} className="flex items-center">
                <div className="flex flex-column items-center">
                  <div className="f-10 color-balihai os-semibold">пересадки</div>
                  ------------------->
                </div>
              </Col>
              <Col md={8}>
                <div className="time">11:45</div>
              </Col>
            </Row>
            {/* row2 */}
            <Row>
              <Col md={8}>
                <div className="flex flex-column">
                  <div className="f-10 color-charcoal os-semibold">VVO, Владивосток </div>
                  <div className="f-10 color-balihai os-semibold">9 окт 2018, Пт</div>
                </div>
              </Col>
              <Col md={8} className="flex items-center">
                {/* empty */}
              </Col>
              <Col md={8}>
                <div className="flex flex-column">
                  <div className="f-10 color-charcoal os-semibold">Тель-Авив, TLV</div>
                  <div className="f-10 color-balihai os-semibold">10 окт 2018, Пт</div>
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
