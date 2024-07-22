import styled from "styled-components"
import { Key, PropsWithChildren } from 'react'
import styles from './mdxComponents.module.scss';
import Image from "next/image";
import isValidHttpUrl from "@/utils/isValidHttpUrl";
import { getImageDetails } from "@/utils/image";


const Blockquote = ({children}: PropsWithChildren) =>  <blockquote className={styles.blockquote}>{children}</blockquote>
const MdxImageParent = ({children, inline}: PropsWithChildren & {inline?: boolean}) =>  <div className={styles.mdxImageParent + (inline ? ' ' + styles.inline : '')}>{children}</div>

type MdxImageProps = {
  src: string,
  caption?: string
}

// to-do: should we be able to support external images?
const MdxImage = (slug?: string) => ((props: MdxImageProps) => {
  
  const getUrl = (url: string) => {
    if (isValidHttpUrl(url)) {
      /*const image = await getImagePlaceholder(url);
      
      return {
        width: image.metadata.width,
        height: image.metadata.height,
        blurDataURL: image.base64
      }*/
      return url;
    } else {
      return require('../../posts/' + slug + '/' + url).default
    }
  };
  
  // eslint-disable-next-line @next/next/no-img-element
  const ImageComponent = ({ src, alt }: { src: string, alt: string }) => typeof src != 'string' ? <Image src={src} alt={alt} /> : <img src={src} alt={alt} />
  
  if (Array.isArray(props.src)) {
    return <MdxImageParent inline>
      {props.src.map((src: string, index: number)=> {
        const url = getUrl(src);
        return (
          <div key={src as Key} className="img-wrapper">
            <ImageComponent src={url} alt={`Kuva ${index} ${props?.caption ? ": " + props.caption : ""}`} />
          </div>
        )
      })}
    </MdxImageParent>
  } else {
    const url = getUrl(props.src);
    return <MdxImageParent>
      <ImageComponent src={url} alt={props?.caption || ""} />
      {props.caption ?
        <small>{props.caption}</small>
      : null}
    </MdxImageParent>
  }
})

export const mdxComponents = (slug?: string) => ({ Blockquote, Image: MdxImage(slug)})