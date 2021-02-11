import React from "react";
import { Router, Scene } from "react-native-router-flux";
import { Root } from "native-base";
import HomeScreen from "../screens/HomeScreen";

export const MainLayout = () => {
  return (
    <Root>
      <Router>
        <Scene hideNavBar={true} key="root">
          <Scene key="homeScreen" component={HomeScreen} initial={true} />
        </Scene>
      </Router>
    </Root>
  );
};
