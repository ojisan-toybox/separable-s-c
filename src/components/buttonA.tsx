import * as React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <button className="button">buton A</button>
    </div>
  );
};

const StyledComponent = styled(Component)`
  max-width: 1024px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  & .button {
    color: red;
  }
`;

export const ButtonA = StyledComponent;
