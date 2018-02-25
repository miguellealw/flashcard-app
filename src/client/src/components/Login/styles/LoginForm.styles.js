import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 5rem);
  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    // background: pink;

    input {
      border: 2px solid #f2f2f2;
      width: 100%;
      height: 3.5rem;
      text-indent: 1rem;
      margin-top: 0.5rem;

      &:hover {
        border: 2px solid #d0d0d0;
      }
      &:focus {
        border: 2px solid #d0d0d0;
      }
      &[type="checkbox"] {
        width: 0;
        height: 0;
        margin-right: 1rem;
      }
      .checkbox-label {
        margin: 0;
      }
    }

    label {
      margin: 1rem 0;
    }

    button {
      margin: 1.5rem 0;
      background: black;
      color: white;
      padding: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      border: inherit;
      border: 2px solid black;
      transition: all 0.3s ease-in-out;

      &:disabled,
      &[disabled] {
        background: red;
      }

      &:hover {
        border: 2px solid black;
        background: white;
        color: black;
      }
    }
  }
`;

export const ErrorMessage = styled.div`
  color: white;
  background: #dc3545;
  font-size: .8em;
  border-radius: 0.2rem;
  padding: 0.5rem 1.5rem;
`;
