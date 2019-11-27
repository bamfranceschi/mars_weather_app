import styled from "styled-components";

interface VBoxProps {
  readonly justify?: "start" | "center" | "end";
  readonly align?: "start" | "center" | "end";
}

const VBox = styled.div<VBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify || "start"};
  align-items: ${props => props.align || "start"};
  height: 100%;
`;

export default VBox;
