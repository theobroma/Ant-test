import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button, Radio, Checkbox, Icon } from 'antd';
import StyledTicketsFilter from './TicketsFilter.styled';

const CheckboxGroup = Checkbox.Group;

// const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
// const defaultCheckedList = ['Без пересадок'];

const plainOptions = [
  { label: 'Без пересадок', value: 0 },
  { label: '1 пересадка', value: 1 },
  { label: '2 пересадки', value: 2 },
  { label: '3 пересадки', value: 3 },
];

const plainOptionsValuesArr = plainOptions.map((obj) => {
  return Object.values(_.pick(obj, ['value']));
});
const plainOptionsValues = _.flatten(plainOptionsValuesArr);
const defaultCheckedList = [{ label: 'Без пересадок', value: 0 }];

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
    this.setState(
      {
        checkedList,
        indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
        checkAll: checkedList.length === plainOptions.length,
      },
      () => {
        // console.log(this.state);
        // console.log(checkedList.length);
      },
    );
  };

  onCheckAllChange = (e) => {
    this.setState(
      {
        checkedList: e.target.checked ? plainOptionsValues : [],
        indeterminate: false,
        checkAll: e.target.checked,
      },
      () => {
        console.log(this.state);
      },
    );
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
