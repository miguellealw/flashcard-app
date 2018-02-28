import styled from "styled-components";

const green = "#28a745",
  red = "#dc3545";

const Flash = styled.div`
  background: ${({ success }) => (success ? green : red)};
  border-radius: 0.2rem;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: .7rem 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
`;

export default Flash;
