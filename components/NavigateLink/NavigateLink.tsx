import Link from 'next/link';
import styles from './NavigateLink.module.css'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { PropsWithChildren } from 'react';

type NavigateLinkProps = PropsWithChildren<{
    href: string
}>

export function NavigateLink({ href, children }: NavigateLinkProps) {
    return <Link href={href} className={styles.navigatelink}>
        {children}
        <HiOutlineArrowNarrowRight />
    </Link>;
}
