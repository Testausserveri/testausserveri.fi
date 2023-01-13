import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './Gallery.module.css'

export type GalleryProps = {
    media: {
        cover?: boolean,
        url?: string
    }[]
}

export function Gallery({ media }: GalleryProps) {
    const [activeMedia, setActiveMedia] = useState(0)
    const items = media.sort((a, b) => (a.cover ? -1 : 0))

    useEffect(() => {
        setActiveMedia(0)
    }, [media])

    return (
        <div>
            <div className={styles.display}>
                {items[activeMedia]?.url ?
                    <Image src={items[activeMedia].url} layout="fill" />
                    : null}
            </div>
            <ul className={styles.chooser}>
                {items.map((item, i) => (
                    <li key={i} onClick={() => setActiveMedia(i)}><Image src={item.url} layout="fill" /></li>
                ))}
            </ul>
        </div>
    )
}
