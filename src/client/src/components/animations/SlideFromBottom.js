import React from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyles = {
  transition: `all ${duration}ms ease-in-out`,
  transform: "translateY(-2rem)",
  opacity: 0,
};

const transitionStyles = {
  entering: { transform: "translateY(2rem)", opacity: 0 },
  entered: { transform: "translateY(0rem)", opacity: 1 },

  exiting: { transform: "translateY(0rem)", opacity: 1 },
  exited: { transform: "translateY(2rem)", opacity: 0 },
};

const style = state => ({
  ...defaultStyles,
  ...transitionStyles[state],
});

const SlideFromBottom = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {typeof children !== "function"
      ? new Error(
          `Expected child to be function, but instead got ${typeof children}`,
        )
      : state => {
          return children(style(state));
        }}
  </Transition>
);

/*
  The Problem
  ----
  can't wrap children in div with styles because 
  it overrides childrens compoents styles and causes problems

  Possible Solution
  ----
  pass style down to children to put straint on children container
  and not make a new one with a div
*/

export default SlideFromBottom;
