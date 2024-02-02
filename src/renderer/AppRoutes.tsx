import React from "react";
import { Router, Route } from "electron-router-dom";
import { Container, Theme } from "@radix-ui/themes";
import { WelcomeScreen } from "./screens/WelcomeScreen/WelcomeScreen";
import { AboutScreen } from "./screens/AboutScreen/AboutScreen";
import { ScreenConstants } from "../constants/ScreenConstants";
import { DashboardScreen } from "./screens/DashboardScreen/DashboardScreen";

export function AppRoutes() {
  return (
    <Theme
      appearance="dark"
      accentColor="mint"
      radius="large"
      panelBackground="translucent"
    >
      <Container height="max-content">
        <Router
          main={
            <>
              <Route
                path={ScreenConstants.WELCOME}
                element={<WelcomeScreen />}
              />
              <Route path={ScreenConstants.DASHBOARD} element={<DashboardScreen />} />
              <Route path={ScreenConstants.ABOUT} element={<AboutScreen />} />
            </>
          }
        />
      </Container>
    </Theme>
  );
}
