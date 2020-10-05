import * as React from "react";
import styled from "styled-components";

interface PassedProps {
  message: string;
}

interface ContainerProps {
  setShowState: (state: boolean) => void;
  showState: boolean;
}

interface Props extends PassedProps, ContainerProps {}

const Component: React.FC<Props> = (props) => {
  const { setShowState, showState, message } = props;
  return (
    <div>
      {showState ? message : ""}
      <button
        onClick={() => {
          setShowState(!showState);
        }}
      >
        toggle state
      </button>
    </div>
  );
};

const StyledComponent = styled(Component)``;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const [showState, setShowState] = React.useState(false);
  const containerProps = { showState, setShowState };
  return <StyledComponent {...props} {...containerProps}></StyledComponent>;
};

export const App = ContainerComponent;
