import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AdminNavigator from "./navigation/AdminNavigator";
import OnboardingScreen from "./screens/10_OnboardingScreen";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import MainNavigator from "./navigation/MainNavigator";
import LoginNavigator from "./navigation/LoginNavigator";

import useLinking from "./navigation/useLinking";
import SetupScreen from "./screens/15_SetupScreen";

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
          "Grold-Regular": require("./assets/fonts/GroldRounded-Regular.ttf"),
          "Grold-Bold": require("./assets/fonts/GroldRounded-Bold.ttf")
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="AdminNavigator"
              component={AdminNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginNavigator"
              component={LoginNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setup"
              component={SetupScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MainNavigator"
              component={MainNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE7DD"
  }
});
