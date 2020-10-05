import * as React from "react";
import styled from "styled-components";
import { ButtonA } from "./components/buttonA";
import { ButtonB } from "./components/buttonB";

interface PassedProps {
  message: string;
}

interface ContainerProps {
  setShowState: (state: boolean) => void;
  showState: boolean;
}

interface Props extends PassedProps, ContainerProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { setShowState, showState, message } = props;
  return (
    <div className={props.className}>
      {showState ? message : ""}
      <button
        onClick={() => {
          setShowState(!showState);
        }}
        className="button"
      >
        toggle state
      </button>
      <ButtonA></ButtonA>
      <ButtonB className={"passedClass"}></ButtonB>
    </div>
  );
};

const StyledComponent = styled(Component)`
  max-width: 1024px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  // & > .button としないと巻き込む
  & .button {
    width: 100px;
    height: 40px;
    margin: auto;
  }

  & .passedClass {
    margin: 300px;
    & .button {
      color: blue;
    }
  }
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const [showState, setShowState] = React.useState(false);
  const containerProps = { showState, setShowState };
  return <StyledComponent {...props} {...containerProps}></StyledComponent>;
};

export const App = ContainerComponent;
