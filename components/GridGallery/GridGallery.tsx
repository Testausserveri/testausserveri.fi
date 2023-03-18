import Image, { ImageProps, StaticImageData } from "next/legacy/image"
import styles from './GridGallery.module.css'

export type GridGalleryProps = {
    media: (string | StaticImageData)[],
    imageProps?: Omit<ImageProps, 'src'>
}

/**
 * On desktop 4 columns photo grid
 * X | X | X | X
 * 
 * On mobile 2 column photo grid
 * X | X
 * X | X
 */
export function GridGallery({media, imageProps}: GridGalleryProps) {
    return (
        <div className={styles.gridGallery}>
           {media.map(url => (
            <Image src={url} key={typeof url === "string" ? url : url.src} {...imageProps} />
           ))}
        </div>
    )
}
