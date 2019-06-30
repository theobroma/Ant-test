import React from 'react';
import PropTypes from 'prop-types';
import { Button, Radio, Checkbox, Icon } from 'antd';
import StyledTicketsFilter from './TicketsFilter.styled';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const defaultCheckedList = ['Без пересадок'];

class TicketsFilter extends React.Component {
  state = {
    // radio
    currency: 'UAH',
    // checkbox
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
    this.props.setCurrency(e.target.value);
  };

  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  render() {
    // const { currency } = this.state;
    return (
      <StyledTicketsFilter>
        <div className="pa3">
          <div className="form-group">
            <label class="control-label">Валюта</label>
            <Radio.Group value={this.props.filter.currency} onChange={this.handleCurrencyChange}>
              <Radio.Button value="UAH">UAH</Radio.Button>
              <Radio.Button value="USD">USD</Radio.Button>
              <Radio.Button value="EUR">EUR</Radio.Button>
            </Radio.Group>
          </div>
          {/* checkbox */}
          <div className="form-group">
            <label class="control-label">Количество пересадок</label>
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
            >
              Все
            </Checkbox>
            <CheckboxGroup
              options={plainOptions}
              value={this.state.checkedList}
              onChange={this.onChange}
              className="flex flex-column"
            />
          </div>
        </div>
      </StyledTicketsFilter>
    );
  }
}

TicketsFilter.propTypes = {};

export default TicketsFilter;
