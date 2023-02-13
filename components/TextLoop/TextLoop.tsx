import styled, { keyframes } from "styled-components";
import { useWrappingCounter } from '../../hooks/useWrappingCounter';
import { PropsWithChildren } from "react";

const TextLoopAnimation = (stayTimeRatio: number) => keyframes`
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

const TextLoopElement = styled.span<{
  stayTimeRatio: number;
  duration: number;
}>`
  animation: ${props => TextLoopAnimation(props.stayTimeRatio)} ${(props) => props.duration}s ease-in-out;
`

type TextLoopProps = PropsWithChildren<{
  duration?: number;
  stayTimeRatio?: number;
}>

export const TextLoop = ({ children, duration = 3, stayTimeRatio = 95 }: TextLoopProps) => {
  const childrenArray = children && Array.isArray(children) ? children : [children];
  const [index, incrementIndex] = useWrappingCounter(childrenArray.length);

  if (!children) return null;

  return <TextLoopElement
    key={index}
    duration={duration}
    stayTimeRatio={stayTimeRatio}
    onAnimationEnd={incrementIndex}
  >
    {childrenArray[index]}
  </TextLoopElement>;
}
