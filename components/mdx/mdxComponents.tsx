import styled from "styled-components"
import { Key, PropsWithChildren } from 'react'
import styles from './mdxComponents.module.scss';
import Image from "next/image";
import isValidHttpUrl from "@/utils/isValidHttpUrl";
import { getImageDetails } from "@/utils/image";
import ImageGalleryWithLightbox, { GalleryImage } from "../ImageGalleryWithLightbox/ImageGalleryWithLightbox";


const Blockquote = ({children}: PropsWithChildren) =>  <blockquote className={styles.blockquote}>{children}</blockquote>
const MdxImageParent = ({children, inline}: PropsWithChildren & {inline?: boolean}) =>  <div className={styles.mdxImageParent + (inline ? ' ' + styles.inline : '')}>{children}</div>

type MdxImageProps = {
  src: string,
  caption?: string
}

const MdxImageGallery = (slug: string) => ((props: { src: string[] }) => {
  const images: GalleryImage[] = props.src.map(image => {
    /*if (isValidHttpUrl(url)) {
      return url;
    } else {
      return require('../../posts/' + slug + '/' + url).default
    }*/
   const imported = require('../../posts/' + slug + '/' + image).default
   return {
    src: imported.src,
    width: imported.width,
    height: imported.height
   }
  })
  return <ImageGalleryWithLightbox images={images} />
})

const MdxImage = (slug?: string) => ((props: MdxImageProps) => {
  
  const getUrl = (url: string) => {
    if (isValidHttpUrl(url)) {
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

const Empty = () => {
  console.error("Missing slug from mdx component, see usage");
  return <></>;
};

export const mdxComponents = (slug?: string) => ({
   Blockquote, 
   Image: slug ? MdxImage(slug) : Empty, 
   ImageGallery: slug ? MdxImageGallery(slug) : Empty 
})