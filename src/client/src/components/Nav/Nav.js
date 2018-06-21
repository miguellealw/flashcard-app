import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navigation, NavList } from './styles/Nav.styles';
import Avatar from '../Theme/Avatar/Avatar';
import { fetchImage } from '../../helpers';

const nonAuthedLinks = () => (
  <NavList>
    <NavLink to="/" exact activeClassName="selected">
      <li>Home</li>
    </NavLink>
    <NavLink to="/login" activeClassName="selected">
      <li>Log In</li>
    </NavLink>
    <NavLink to="/signup" activeClassName="selected">
      <li>Sign Up</li>
    </NavLink>
  </NavList>
);

const Nav = ({ auth: { loggedIn, isFetching }, logoutUser }) => (
  <Fragment>
    {!isFetching && (
      <Navigation>
        {loggedIn ? (
          <Avatar
            imgURL={fetchImage()}
            options={[
              { text: 'Your Decks', to: '/decks' },
              { text: 'Log Out', to: '/', handler: logoutUser },
            ]}
          />
        ) : (
          nonAuthedLinks()
        )}
      </Navigation>
    )}
  </Fragment>
);

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.object,
  }),
};

export default Nav;
