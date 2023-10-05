import React from "react";
import * as eva from "@eva-design/eva";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApplicationProvider } from "@ui-kitten/components";
import HomePage from "./pages/HomePage";
import { ThemeApple, ThemeAndroid } from "./themes";
import { StatusBar, Platform } from "react-native";

export default App = () => {
  StatusBar.setBarStyle("light-content", true);
  return (
    <SafeAreaProvider>
      <ApplicationProvider
        {...eva}
        theme={Platform.OS === "ios" ? ThemeApple : ThemeAndroid}
      >
        <HomePage />
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};
