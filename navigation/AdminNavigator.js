import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../screens/admin/10_SignUpScreen";
import InviteMembersScreen from "../screens/admin/20_InviteMembersScreen";
import ManageGroupScreen from "../screens/admin/30_ManageGroupScreen";

const Stack = createStackNavigator();

export default function AdminNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="InviteMembers"
        component={InviteMembersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageGroup"
        component={ManageGroupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
