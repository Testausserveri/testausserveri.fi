import Image, { ImageProps, StaticImageData } from "next/legacy/image"
import styles from './GridGallery.module.css'

type MediaImage = {
    image: string | StaticImageData,
    alt: string
}

export type GridGalleryProps = {
    media: MediaImage[],
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
export function GridGallery({ media, imageProps }: GridGalleryProps) {
    return (
        <div className={styles.gridGallery}>
            {media.map(m => (
                <Image
                    src={m.image}
                    key={typeof m === "string" ? m : m.alt}
                    alt={m.alt}
                    {...imageProps} />
            ))}
        </div>
    )
}
