import styled from "styled-components"
import { Key } from 'react'

const Blockquote = styled.blockquote`
  text-align: center;
  margin: 3rem 0;
  color: rgba(255,255,255, 0.7);
`

const MdxImageParent = styled.div`
  &.inline {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 500px;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
      max-height: 100%;
      gap: 1rem;
    }
    .img-wrapper {
      flex: 1;
      height: 100%;
      margin-right: 10px; 
    }
    img {
      height: 100%;
      width: auto;
      object-fit: cover;
    }
  }
  img {
    max-height: 500px;
    width: auto;
    max-width: 100%;
    margin: 0 auto;
    display: block;
    border-radius: 0.5rem;
  }
  small {
    text-align: center;
    width: 100%;
    display: block;
    margin: .5rem 0 1rem 0;
  }
`

type MdxImageProps = {
  src: string,
  caption?: string
}

const MdxImage = (props: MdxImageProps) => {
  if (Array.isArray(props.src)) {
    return <MdxImageParent className="inline">
      {props.src.map((url: string, index: number)=> (
        <div key={url as Key} className="img-wrapper">
          <img src={url} alt={`Kuva ${index} ${props?.caption ? ": " + props.caption : ""}`} />
        </div>
      ))}
    </MdxImageParent>
  } else {
    return <MdxImageParent>
      <img src={props.src} alt={props?.caption} />
      {props.caption ?
        <small>{props.caption}</small>
      : null}
    </MdxImageParent>
  }
}
export const mdxComponents = { Blockquote, Image: MdxImage}