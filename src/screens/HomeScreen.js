import React, { Component } from "react";
import { HomeComponent } from "../component/HomeComponent";
import { HeaderComponent } from "../component/HeaderComponent";
import { Container } from "native-base";
import moment from "moment";

export default class HomeScreen extends Component {

  getDate = (date) => {
    return moment(date).format("YYYY-MM-DD")
  }

  render() {
    const { day } = this.props;
    const isBackPage =  !!day;
    const dateRates = day ? day : new Date();
    const title = isBackPage ? this.getDate(dateRates) : "Home";
    return (
      <Container>
        <HeaderComponent isGoToSettings={true} isGoToBackPage={isBackPage} titel={title}></HeaderComponent>
        <HomeComponent dateRates={dateRates}></HomeComponent>
      </Container>
    );
  }
}
