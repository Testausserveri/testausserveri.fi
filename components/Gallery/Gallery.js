import Image from 'next/image'
import styles from './Gallery.module.css'


export function Gallery({media}) {
    const cover = media.find(item => item.cover)

    return (
        <div>
            <div className={styles.display}>
                <Image src={cover.url} layout="fill" />
            </div>
            <ul className={styles.chooser}>
                <li><Image src={cover.url} layout="fill" /></li>
                <li></li>
            </ul>
        </div>
    )
}