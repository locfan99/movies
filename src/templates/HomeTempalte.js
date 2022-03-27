
import { Route } from "react-router";
import Header from "./Header";
import React, { Fragment } from 'react'
import Footer from "./Footer";
export const HomeTemplate = (props) => {
  //path, exact, Component

  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location,props.history,props.match

        return (
          <Fragment>
            <Header />
           
            <Component {...propsRoute} />
            <Footer/>
          </Fragment>
        );
      }}
    />
  );
};
