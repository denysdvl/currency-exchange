import React, { Component } from "react";
import { SettingsComponent } from "../component/SettingsComponent";
import { HeaderComponent } from "../component/HeaderComponent";
import { Container } from "native-base";

export default class SettingsScreen extends Component {

  render() {
    return (
      <Container>
        <HeaderComponent isGoToSettings={false} isGoToBackPage={true} titel={"Settings"}></HeaderComponent>
        <SettingsComponent></SettingsComponent>
      </Container>
    );
  }
}
