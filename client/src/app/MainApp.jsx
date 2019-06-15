import React from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Radio } from 'antd';

import TableSection from 'containers/TableSection';
import FormSection from 'containers/FormSection';
import AntFormSection from 'containers/AntFormSection';

export default class MainApp extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col md={8}>
            <AntFormSection />
          </Col>
        </Row>
      </div>
    );
  }
}
