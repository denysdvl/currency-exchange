import React, { Component } from "react";
import { HomeComponent } from "../component/HomeComponent";
import { HeaderComponent } from "../component/HeaderComponent";
import { Container } from "native-base";

export default class HomeScreen extends Component {
  render() {
    const {base, day} = this.props;
    const isBackPage = !!base && !!day;
    const baseCurrency = base ? base : "EUR";
    const dateRates = day ? day : new Date();
    return (
      <Container>
        <HeaderComponent isGoToSettings={true} isGoToBackPage={isBackPage} titel={"Home"}></HeaderComponent>
          <HomeComponent baseCurrency={baseCurrency} dateRates={dateRates}></HomeComponent>
      </Container>
    );
  }
}
