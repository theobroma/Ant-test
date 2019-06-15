import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TicketsListComponent from 'components/TicketsList';

class TicketsList extends React.PureComponent {
  static propTypes = {
    // currentUser: PropTypes.shape({}),
  };

  render() {
    const props = {
      ...this.props,
    };

    return <TicketsListComponent {...props} />;
  }
}

const mapStateToProps = (state) => ({
  //   currentUser: getCurrentUser(state),
});

const mapDispatchToProps = {
  // getTranslation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketsList);
