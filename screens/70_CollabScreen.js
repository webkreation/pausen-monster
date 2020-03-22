import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ViewContainer from "../components/ViewContainer";
import NextButton from "../components/NextButton";

export default function MainScreen() {
  return (
    <ViewContainer>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>Main</Text>
          <NextButton nextTitle="goto content" navigateTo="Content" />
        </View>
      </ScrollView>
    </ViewContainer>
  );
}

MainScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  }
});
