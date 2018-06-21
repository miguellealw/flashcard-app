import React, { Component } from 'react';
import FA from 'react-fontawesome';
import { CardContainer, CardInfo, CardImage, CardIcon } from './Card.styles';

const Card = () => <CardContainer>{this.props.children}</CardContainer>;

const Info = ({ infoComp, children }) => <CardInfo>{children}</CardInfo>;

const Icon = ({ name, size, tooltip = '' }) => (
  <CardIcon name={tooltip}>
    <FA name={name} size={size} />
  </CardIcon>
);

const Image = props => (
  <CardImage>
    <img {...props} />
  </CardImage>
);

export default { Card, Info, Icon, Image };
