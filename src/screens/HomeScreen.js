import React, { Component } from "react";
import { HomeComponent } from "../component/HomeComponent";
import { HeaderComponent } from "../component/HeaderComponent";
import { Container, Content } from "native-base";

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent isBackPage={false} titel={"Home"}></HeaderComponent>
          <HomeComponent></HomeComponent>
      </Container>
    );
  }
}
