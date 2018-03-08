import styled from "styled-components";

const green = "#28a745";
const red = "#dc3545";

const Flash = styled.div`
  background: ${({ success }) => (success ? green : red)};
  border-radius: 0.2rem;
  color: white;
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.7rem 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
`;

export default Flash;
