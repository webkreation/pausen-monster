import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ViewContainer from "../components/ViewContainer";
import ContentContainer from "../components/ContentContainer";
import { Button, ButtonText } from "../components/Button";

import styled from "styled-components/native";

import TestImage from "../assets/images/testimage1.png";
import TestImage2 from "../assets/images/testimage2.png";

const HeaderLine = styled.View`
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
`;

const Content = styled.View`
  flex: 1;
  width: 100%;
  margin-bottom: 25px;
`;

const ImageStyled = styled.Image`
  width: 100%;
  resize-mode: cover;
  margin-bottom: 15px;
  border-radius: 9px;
`;

const ContentImage = styled.View`
  flex: 1;
  height: 200px;
  border-radius: 9px;
  margin-bottom: 10px;
`;

const ContentTitle = styled.Text`
  font-size: 24px;
  line-height: 30px;
  font-family: "Grold-Bold";
  color: #5f7195;
  text-transform: uppercase;
`;

const ContentCreator = styled.Text`
  font-size: 16px;
  font-family: "Grold-Regular";
  color: #5f7195;
`;

export default function MainScreen({ navigation }) {
  return (
    <ViewContainer>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ContentContainer>
          <HeaderLine></HeaderLine>

          <Content>
            <TouchableOpacity onPress={() => navigation.navigate("Content")}>
              <ContentImage>
                <ImageStyled source={TestImage} />
              </ContentImage>
              <ContentTitle>Elefenwald Geschichte</ContentTitle>
              <ContentCreator>von Moritz D.</ContentCreator>
            </TouchableOpacity>
          </Content>

          <Content>
            <TouchableOpacity onPress={() => navigation.navigate("Content")}>
              <ContentImage>
                <ImageStyled source={TestImage2} />
              </ContentImage>
              <ContentTitle>Der Eulendieb</ContentTitle>
              <ContentCreator>von Sarah K.</ContentCreator>
            </TouchableOpacity>
          </Content>

          <Content>
            <TouchableOpacity onPress={() => navigation.navigate("Content")}>
              <ContentImage>
                <ImageStyled source={TestImage2} />
              </ContentImage>
              <ContentTitle>Der Eulendieb</ContentTitle>
              <ContentCreator>von Sarah K.</ContentCreator>
            </TouchableOpacity>
          </Content>

          <Button onPress={() => navigation.navigate("Create")}>
            <ButtonText>+</ButtonText>
          </Button>
        </ContentContainer>
      </ScrollView>
    </ViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE7DD"
  }
});
