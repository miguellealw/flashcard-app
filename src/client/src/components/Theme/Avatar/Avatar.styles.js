import styled from 'styled-components';

export const AvatarContainer = styled.div`
  margin: 3em;
  position: relative;
`;

export const AvatarImage = styled.div`
  overflow: hidden;
  cursor: pointer;
  border-radius: 100%;
  transition: box-shadow 0.3s ease-out;
  width: 4em;
  height: 4em;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &:hover {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const OptionsList = styled.ul`
  font-size: 0.8rem;
  display: ${props => (props.hide ? 'none' : 'flex')};
  margin-top: 0.8em;
  position: absolute;
  right: 0;
  background: white;
  flex-direction: column;
  border-radius: 0.2em;
  border: 1px solid #ccc;
  min-width: 10em;
  text-align: center;
  a {
    text-decoration: none;
    color: black;
  }

  a > li {
    padding: .8em;
    list-style: none;

    &:hover {
      background: #eee;
    }
  }
`;
