"use strict";

var React = require('react');

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/product/ProductPage')}/>
    <Route name="Products" handler={require('./components/product/ProductPage')} />
    <Route name="addProduct" path="Product" handler={require('./components/product/manageProductPage')} />
    <Route name="manageProduct" path="Product/:id" handler={require('./components/product/manageProductPage')} />

    <Route name="about" handler={require('./components/about/aboutPage')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="Products" to="Products" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;

