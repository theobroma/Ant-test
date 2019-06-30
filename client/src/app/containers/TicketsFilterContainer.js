import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TicketsFilterComponent from 'components/TicketsFilter';
import { setCurrency } from 'actions/filter';

class TicketsFilter extends React.PureComponent {
  static propTypes = {
    // currentUser: PropTypes.shape({}),
  };

  render() {
    const props = {
      ...this.props,
    };

    return <TicketsFilterComponent {...props} />;
  }
}

const mapStateToProps = (state) => ({
  //   currentUser: getCurrentUser(state),
  tickets: state.tickets.data,
  filter: state.filter,
});

const mapDispatchToProps = {
  // getTranslation
  setCurrency,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketsFilter);
