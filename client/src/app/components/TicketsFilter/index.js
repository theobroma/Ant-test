import React from 'react';
import PropTypes from 'prop-types';
import { Button, Radio, Icon } from 'antd';
import StyledTicketsFilter from './TicketsFilter.styled';

// const TicketsFilter = (props) => {
//   console.log(props);
//   return (
//     <StyledTicketsFilter>
//       <div className="pa3">
//         <Radio.Group value={size} onChange={this.handleSizeChange}>
//           <Radio.Button value="large">Large</Radio.Button>
//           <Radio.Button value="default">Default</Radio.Button>
//           <Radio.Button value="small">Small</Radio.Button>
//         </Radio.Group>
//       </div>
//     </StyledTicketsFilter>
//   );
// };

class TicketsFilter extends React.Component {
  state = {
    currency: 'UAH',
  };

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };

  render() {
    const { currency } = this.state;
    return (
      <StyledTicketsFilter>
        <div className="pa3">
          <div className="form-group">
            <label class="control-label">Валюта</label>
            <Radio.Group value={currency} onChange={this.handleCurrencyChange}>
              <Radio.Button value="UAH">UAH</Radio.Button>
              <Radio.Button value="USD">USD</Radio.Button>
              <Radio.Button value="EUR">EUR</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </StyledTicketsFilter>
    );
  }
}

TicketsFilter.propTypes = {};

export default TicketsFilter;
