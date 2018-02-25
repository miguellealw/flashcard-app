import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from{
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const slideFromBottom = keyframes`
  from {
    opactiy: 0;
    transform: translateY(1.5rem);
  }
  to {
    opactiy: 1;
    transform: translateY(0)
  }
`;
