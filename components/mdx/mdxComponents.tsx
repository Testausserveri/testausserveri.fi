import styled from "styled-components"
import { Key, PropsWithChildren } from 'react'
import styles from './mdxComponents.module.scss';
import Image from "next/image";


const Blockquote = ({children}: PropsWithChildren) =>  <blockquote className={styles.blockquote}>{children}</blockquote>
const MdxImageParent = ({children, inline}: PropsWithChildren & {inline?: boolean}) =>  <div className={styles.mdxImageParent + (inline ? ' ' + styles.inline : '')}>{children}</div>

type MdxImageProps = {
  src: string,
  caption?: string
}

const MdxImage = (props: MdxImageProps) => {
  if (Array.isArray(props.src)) {
    return <MdxImageParent inline>
      {props.src.map((url: string, index: number)=> (
        <div key={url as Key} className="img-wrapper">
          <Image fill src={url} alt={`Kuva ${index} ${props?.caption ? ": " + props.caption : ""}`} />
        </div>
      ))}
    </MdxImageParent>
  } else {
    return <MdxImageParent>
      <Image fill src={props.src} alt={props?.caption || ""} />
      {props.caption ?
        <small>{props.caption}</small>
      : null}
    </MdxImageParent>
  }
}
export const mdxComponents = { Blockquote, Image: MdxImage}