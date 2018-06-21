import React, { Component } from 'react';
import { OptionsList, AvatarImage, AvatarContainer } from './Avatar.styles';
import { Link, NavLink } from 'react-router-dom';

class Avatar extends Component {
  state = {
    isHidden: true,
  };

  toggleOptions = e => {
    this.setState(currentState => ({ isHidden: !currentState.isHidden }));
  };

  render() {
    const { imgURL, options } = this.props;

    return (
      <AvatarContainer onClick={this.toggleOptions}>
        <AvatarImage>
          <img src={imgURL} />
        </AvatarImage>

        <OptionsList hide={this.state.isHidden}>
          {options.map((option, i) => (
            <NavLink to={option.to} onClick={option.handler} key={i}>
              <li>{option.text}</li>
            </NavLink>
          ))}
        </OptionsList>
      </AvatarContainer>
    );
  }
}

// const Options = ({ options }) => (
//   <OptionsList>{options.map(option => <li>{option}</li>)}</OptionsList>
// );

export default Avatar;
