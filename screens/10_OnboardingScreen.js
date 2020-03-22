import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import ViewContainer from "../components/ViewContainer";
import ContentContainer from "../components/ContentContainer";
import { Button, ButtonText } from "../components/Button";
import { HeadingWrap, MonsterText, SubHeading } from "../components/Headings";

const Description = styled.Text`
  color: #5f7195;
  font-size: 20px;
  line-height: 26px;
  font-family: "Grold-Regular";
  text-align: center;
`;

export default function MainScreen({ navigation }) {
  return (
    <ViewContainer>
      <ContentContainer>
        <HeadingWrap>
          <MonsterText>MONSTER</MonsterText>
          <SubHeading>PAUSE</SubHeading>
        </HeadingWrap>
        <Description>
          Deine Pause, deine Zeit. Bring die Routine zurück in deinen Alltag und
          nimm an verschiedemem Aktivitäten teil!
        </Description>
        <Button onPress={() => navigation.navigate("Setup")}>
          <ButtonText>LOS GEHT'S!</ButtonText>
        </Button>
      </ContentContainer>
    </ViewContainer>
  );
}
