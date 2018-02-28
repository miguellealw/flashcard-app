import React, { Fragment } from "react";
import Flash from "./styles/Flash.styles";

const FlashMessage = ({ success, error, children }) => (
  <Fragment>
    {success && <Flash success>{children}</Flash>}
    {error && <Flash error>{children}</Flash>}
  </Fragment>
);

export default FlashMessage;
