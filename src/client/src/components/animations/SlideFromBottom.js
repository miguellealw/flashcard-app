import React from "react";
import { Transition } from "react-transition-group";

const duration = 250;

const defaultStyles = {
  transition: `all ${duration}ms cubic-bezier(0.455, 0.03, 0.515, 0.955)`,
  transform: "translateY(-2rem)",
  opacity: 0,
};

const transitionStyles = {
  entering: { transform: "scale(.9)", opacity: 0 },
  entered: { transform: "scale(1)", opacity: 1 },

  exiting: { transform: "scale(1)", opacity: 1 },
  exited: { transform: "scale(.9)", opacity: 0 },
};

const style = state => ({
  ...defaultStyles,
  ...transitionStyles[state],
});

const SlideFromBottom = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={10}>
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
