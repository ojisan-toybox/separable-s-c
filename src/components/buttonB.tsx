// 親からスタイルもらって上書くぞ

import * as React from "react";
import styled from "styled-components";

interface PassedProps {
  className?: string;
}

interface Props extends PassedProps {}

const Component: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <button className="button">buton B</button>
    </div>
  );
};

const StyledComponent = styled(Component)``;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  return <StyledComponent {...props}></StyledComponent>;
};

export const ButtonB = ContainerComponent;
