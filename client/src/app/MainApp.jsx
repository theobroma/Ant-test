import React from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Radio } from 'antd';

// import TableSection from 'containers/TableSection';
// import FormSection from 'containers/FormSection';
import AntFormSection from 'containers/AntFormSection';
import TicketsListContainer from 'containers/TicketsListContainer';

export default class MainApp extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          {/* <Col md={8}>
            <AntFormSection />
          </Col> */}
          <Col md={8}>
            <TicketsListContainer />
          </Col>
        </Row>
      </div>
    );
  }
}
