import React from 'react'
import styled from "styled-components";

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: pink;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`


const Modal = () => (
  <ModalContainer>
    <p>this is a modal</p>
  </ModalContainer>
)

export default Modal