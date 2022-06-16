import styles from './Collaborations.module.css'

import saucesoft from '../../assets/collaborations/saucesoft.svg'

export function Collaborations() {
    return (
        <div className={styles.collaborations}>
            <h2>Yhteistyössä</h2>
            <ul className="noLinkStyles">
                <li>
                    <a href="https://saucesoft.io" target="_blank">
                        <img src={saucesoft.src} height={40} />
                    </a>
                </li>
                
            </ul>
        </div>
    )
}