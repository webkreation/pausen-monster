import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/50_MainScreen";
import ContentScreen from "../screens/60_ContentScreen";
import CollabScreen from "../screens/70_CollabScreen";
import CreateScreen from "../screens/80_CreateScreen";

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Content"
        component={ContentScreen}
        options={{
          headerTitle: null,
          headerTintColor: "#F09490",
          headerStyle: {
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            backgroundColor: "#EFE7DD"
          }
        }}
      />

      <Stack.Screen name="Collab" component={CollabScreen} />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerTitle: null,
          headerTintColor: "#F09490",
          headerStyle: {
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            backgroundColor: "#EFE7DD"
          }
        }}
      />
    </Stack.Navigator>
  );
}
