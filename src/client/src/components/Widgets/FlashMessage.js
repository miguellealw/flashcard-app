import React, { Component, Fragment } from "react";
import Flash from "./styles/Flash.styles";
import SlideFromBottom from "../animations/SlideFromBottom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class FlashMessage extends Component {
  displayFlashMessage = () => {
    const { message, status, show } = this.props.flash;
    return status === "success" ? (
      <SlideFromBottom in={!!show}>
        {styles => (
          <Flash style={styles} success>
            {message}
          </Flash>
        )}
      </SlideFromBottom>
    ) : (
      <SlideFromBottom in={!!show}>
        {styles => (
          <Flash style={styles} error>
            {message}
          </Flash>
        )}
      </SlideFromBottom>
    );
  };

  render() {
    return <Fragment>{this.displayFlashMessage()}</Fragment>;
  }
}

FlashMessage.propTypes = {
  flash: PropTypes.shape({
    message: PropTypes.string,
    status: PropTypes.string,
    show: PropTypes.bool,
  }),
};

const mapStateToProps = ({ flash }) => ({ flash });

export default connect(mapStateToProps)(FlashMessage);
