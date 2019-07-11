import React from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Radio } from 'antd';

import logo from 'assets/images/Logo.png';
// import TableSection from 'containers/TableSection';
// import FormSection from 'containers/FormSection';
// import AntFormSection from 'containers/AntFormSection';
import TicketsFilterContainer from 'containers/TicketsFilterContainer';
import TicketsListContainer from 'containers/TicketsListContainer';

export default class MainApp extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col md={24}>
            <div className="flex justify-center pa4">
              <img src={logo} />
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col md={8} className="mb3">
            <TicketsFilterContainer />
          </Col>
          <Col md={16} className="mb3">
            <TicketsListContainer />
          </Col>
        </Row>
      </div>
    );
  }
}
