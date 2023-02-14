import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  Oswald_400Regular,
  useFonts as UseOswald,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as UseLato } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import "react-native-gesture-handler";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation/index";


import { LogBox } from "react-native";
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  let [OswaldLoaded] = UseOswald({
    Oswald_400Regular,
  });
  let [LatoLoaded] = UseLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
