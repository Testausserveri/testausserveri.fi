import styles from './MembersSubnav.module.css';

import Link from 'next/link';

type MembersSubnavProps = {
  current: 'me' | 'banking';
};

export function MembersSubnav({ current }: MembersSubnavProps) {
  return (
    <div className={styles.subnav}>
      <Link
        href="/me"
        className={`${styles.link} ${current === 'me' ? styles.active : styles.secondary}`}
      >
        Jäsenyys
      </Link>
      <Link
        href="/banking"
        className={`${styles.link} ${current === 'banking' ? styles.active : styles.secondary}`}
      >
        Yhdistyksen pankkitili
      </Link>
    </div>
  );
}

export default MembersSubnav;


