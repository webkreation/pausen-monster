import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import ViewContainer from "../components/ViewContainer";
import ContentContainer from "../components/ContentContainer";
import { Button, ButtonText } from "../components/Button";
import { HeadingWrap, MonsterText, SubHeading } from "../components/Headings";

export default function MainScreen({ navigation }) {
  return (
    <ViewContainer>
      <ContentContainer>
        <HeadingWrap>
          <MonsterText>MONSTER</MonsterText>
          <SubHeading>LOGIN</SubHeading>
        </HeadingWrap>
        <Button onPress={() => navigation.navigate("Onboarding")}>
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
