import styled, { keyframes } from "styled-components";
import { useWrappingCounter } from '../../hooks/useWrappingCounter';

const TextLoopAnimation = (stayTimeRatio) => keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  ${100 - stayTimeRatio}% {
    opacity: 1;
  }
  ${stayTimeRatio}% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const TextLoopElement = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  animation: ${props => TextLoopAnimation(props.stayTimeRatio)} ${(props) => props.duration}s ease-in-out;
`

export const TextLoop = ({ children, duration = 3, stayTimeRatio = 95 }) => {
  const [index, incrementIndex] = useWrappingCounter(children ? children.length : 0);

  if (!children) return null;

  return <TextLoopElement
    key={index}
    duration={duration}
    stayTimeRatio={stayTimeRatio}
    onAnimationEnd={incrementIndex}
  >
    {children[index]}
  </TextLoopElement>;
}
