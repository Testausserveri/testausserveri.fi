import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './GridGallery.module.css'


/**
 * On desktop 4 columns photo grid
 * X | X | X | X
 * 
 * On mobile 2 column photo grid
 * X | X
 * X | X
 */
export function GridGallery({media}) {
    return (
        <div className={styles.gridGallery}>
           {media.map(url => (
            <Image src={url} key={url} />
           ))}
        </div>
    )
}
