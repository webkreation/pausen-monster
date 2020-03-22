import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ViewContainer from "../components/ViewContainer";
import ContentContainer from "../components/ContentContainer";
import { Button, ButtonText } from "../components/Button";
import styled from "styled-components";

const HalloText = styled.Text`
  color: #7cceeb;
  font-size: 80px;
  font-family: "Grold-Bold";
  text-align: center;
`;

export default function MainScreen({ navigation }) {
  return (
    <ViewContainer>
      <ContentContainer>
        <HalloText>HALLO!</HalloText>
        <Button onPress={() => navigation.navigate("MainNavigator")}>
          <ButtonText>ANMELDEN</ButtonText>
        </Button>
      </ContentContainer>
    </ViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE7DD"
  },
  contentContainer: {
    padding: 20
  }
});
