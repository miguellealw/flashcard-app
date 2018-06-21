import styled from 'styled-components';

const green = '#28a745';
const red = '#dc3545';

export const Flash = styled.div`
  background: ${({ success }) => (success ? green : red)};
  border-radius: 0.2rem;
  color: white;
  z-index: 1000;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  padding: 0.5rem 0rem;
  min-width: 10rem;
  // height: 2rem;
  font-size: 0.9em;
  display: flex;
  justify-content: space-around;
  align-item: center;
  // margin-bottom: 1rem;
  // margin-left: 1rem;
`;

export const Message = styled.span`
  margin-left: 1rem;
  text-align: center;
`;

export const ClosingIcon = styled.span`
  margin: 0 0.5rem;
  cursor: pointer;
`;
