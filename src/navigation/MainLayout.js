import React from "react";
import { Router, Scene } from "react-native-router-flux";
import { Root } from "native-base";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

export const MainLayout = () => {
  return (
    <Root>
      <Router>
        <Scene hideNavBar={true} key="root">
          <Scene key="homeScreen" component={HomeScreen} initial={true} />
          <Scene key="settingsScreen" component={SettingsScreen} />
        </Scene>
      </Router>
    </Root>
  );
};
