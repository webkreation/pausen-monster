import styled from "styled-components/native";

const ViewContainer = styled.View`
  flex: 1;
  background-color: #efe7dd;
  margin-bottom: ${props =>
    props.keyboardHeight
      ? Platform.OS === "ios"
        ? props.keyboardHeight
        : 0
      : 0}px;
`;

export default ViewContainer;
