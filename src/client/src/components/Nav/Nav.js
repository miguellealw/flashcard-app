import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Navigation } from "./styles/Nav.styles";

const Nav = ({ auth: { loggedIn, isFetching }, logoutUser }) => (
  <div>
    {!isFetching && (
      <Navigation>
        <ul>
          {!loggedIn ? (
            <Fragment>
              <NavLink to="/" exact activeClassName="selected">
                <li>Home</li>
              </NavLink>
              <NavLink to="/login" activeClassName="selected">
                <li>Log In</li>
              </NavLink>
              <NavLink to="/signup" activeClassName="selected">
                <li>Sign Up</li>
              </NavLink>
            </Fragment>
          ) : (
            <Fragment>
              <NavLink to="/decks" activeClassName="selected">
                <li>Your Decks</li>
              </NavLink>
              <Link to="/" onClick={logoutUser}>
                <li>Log Out</li>
              </Link>
            </Fragment>
          )}
        </ul>
      </Navigation>
    )}
  </div>
);

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }),
};

export default Nav;
