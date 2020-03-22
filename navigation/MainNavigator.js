import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/50_MainScreen";
import ContentScreen from "../screens/60_ContentScreen";
import CollabScreen from "../screens/70_CollabScreen";

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Content" component={ContentScreen} />
      <Stack.Screen name="Collab" component={CollabScreen} />
    </Stack.Navigator>
  );
}
