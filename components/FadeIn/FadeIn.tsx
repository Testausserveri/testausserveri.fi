import { PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";

export type FadeInProps = PropsWithChildren;

const anim = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Component = styled.div`
  animation: ${anim} 0.3s ease-in-out;
`;

export function FadeIn(props: FadeInProps) {
  return (
    <Component>
      {props.children}
    </Component>
  )
}
