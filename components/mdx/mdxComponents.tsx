import styled from "styled-components"
import React, { Key, PropsWithChildren } from 'react'
import styles from './mdxComponents.module.scss';
import Image from "next/image";
import isValidHttpUrl from "@/utils/isValidHttpUrl";
import { getImageDetails } from "@/utils/image";
import ImageGalleryWithLightbox, { GalleryImage } from "../ImageGalleryWithLightbox/ImageGalleryWithLightbox";
import { Terminal } from "./Terminal";
import { CapsuleButton } from "../Button/CapsuleButton";
import { NavigateLink } from "../NavigateLink/NavigateLink";

const Blockquote = ({children}: PropsWithChildren) =>  <blockquote className={styles.blockquote}>{children}</blockquote>
const MdxImageParent = ({children, inline, ...rest}: PropsWithChildren & {inline?: boolean, [key: string]: any}) =>  
  <div className={styles.mdxImageParent + (inline ? ' ' + styles.inline : '')} {...rest}>
    {children}
  </div>

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

const MdxInlineImage = (slug: string) => ((props: { src: string, [key: string]: any }) => {
  const getUrl = (url: string) => {
    if (isValidHttpUrl(url)) {
      return url;
    } else {
      return require('../../posts/' + slug + '/' + url).default
    }
  };

  const { src, ...otherProps } = props;

  return <Image
    className={styles.inlineImage}
    src={getUrl(src)}
    alt=""
    {...otherProps}
  />
})
const MdxImage = (slug?: string) => ((props: MdxImageProps & { [key: string]: any }) => {
  
  const getUrl = (url: string) => {
  if (isValidHttpUrl(url)) {
    return url;
  } else {
    return require('../../posts/' + slug + '/' + url).default
  }
  };
  
  // eslint-disable-next-line @next/next/no-img-element
  const ImageComponent = ({ src, alt, ...rest }: { src: string, alt: string, [key: string]: any }) => 
  // eslint-disable-next-line @next/next/no-img-element
  typeof src != 'string' ? <Image src={src} alt={alt} {...rest} /> : <img src={src} alt={alt} {...rest} />
  
  const { src, caption, style, ...otherProps } = props;

  if (Array.isArray(src)) {
  return <MdxImageParent inline {...otherProps}>
    {src.map((srcItem: string, index: number) => {
    const url = getUrl(srcItem);
    return (
      <div key={srcItem as Key} className="img-wrapper">
      <ImageComponent src={url} alt={`Kuva ${index} ${caption ? ": " + caption : ""}`} />
      </div>
    )
    })}
  </MdxImageParent>
  } else {
  const url = getUrl(src);
  return <MdxImageParent {...otherProps}>
    <ImageComponent src={url} alt={caption || ""} style={style} />
    {caption ?
    <small>{caption}</small>
    : null}
  </MdxImageParent>
  }
})

const MdxVideo = (slug?: string) => ({src}: {src: string}) => {
  if (!slug) return <></>

  const getUrl = (url: string) => {
    if (isValidHttpUrl(url)) {
      return url;
    } else {
      return require('../../posts/' + slug + '/' + url).default
    }
  };
  return <video className={styles.video} controls src={getUrl(src)} />
}

const CodeBlock = ({children}: {children: React.ReactNode}) => (
  <code className={styles.code}>
    {children}
  </code>
)
const Empty = () => {
  console.error("Missing slug from mdx component, see usage");
  return <></>;
};
const PresentationCard = (slug?: string) => ({title, author, logo, description}: {title: string, author: string, logo: string, description: string}) => (
  <div className={styles.presentationCard}>
    <div>
      <h3>{title}</h3>
      <code>{author}</code>
      <p>{description}</p>
    </div>
  </div>
)

export const mdxComponents = (slug?: string) => ({
   Blockquote, 
   Image: slug ? MdxImage(slug) : Empty,
   InlineImage: slug ? MdxInlineImage(slug) : Empty,
   Video: MdxVideo(slug),
   ImageGallery: slug ? MdxImageGallery(slug) : Empty,
   Terminal,
   CodeBlock,
   CapsuleButton,
   NavigateLink,
   PresentationCard: slug ? PresentationCard(slug) : Empty,
})