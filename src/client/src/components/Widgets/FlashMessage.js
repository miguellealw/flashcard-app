import React, { Component, Fragment } from 'react';
import { Flash, Message, ClosingIcon } from './styles/Flash.styles';
import SlideFromBottom from '../animations/SlideFromBottom';
import { connect } from 'react-redux';
// import { dispatch } from "redux";
import PropTypes from 'prop-types';
import reduxActions from '../../actions/';

class FlashMessage extends Component {
  static propTypes = {
    flash: PropTypes.shape({
      message: PropTypes.string,
      status: PropTypes.string,
      show: PropTypes.bool,
    }),
  };

  displayFlashMessage = () => {
    const { message, status, show } = this.props.flash;
    return (
      <SlideFromBottom in={!!show}>
        {styles => (
          <Fragment>
            <Flash
              style={styles}
              success={status === 'success'}
              error={status === 'error'}
            >
              <Message>{message}</Message>
              <ClosingIcon onClick={this.props.clearFlash}>&times;</ClosingIcon>
            </Flash>
          </Fragment>
        )}
      </SlideFromBottom>
    );
  };

  render() {
    return <Fragment>{this.displayFlashMessage()}</Fragment>;
  }
}

const mapStateToProps = ({ flash }) => ({ flash });
const mapDispatchToProps = dispatch => ({
  clearFlash: () => {
    dispatch(reduxActions.clearFlash());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);
