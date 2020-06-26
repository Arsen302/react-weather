import React, { Component } from "react";
import MainPage from "../MainPage/MainPage";
import WeatherPage from "../MainPage/WeatherData/WeatherData";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={MainPage} exact></Route>
        <Route path="/city" component={WeatherPage}></Route>
      </Switch>
    );
  }
}
