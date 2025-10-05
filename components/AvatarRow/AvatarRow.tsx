"use client";

import Image from 'next/image';
import styles from './AvatarRow.module.scss'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { Member } from '../../utils/types';
import { getMemberAvatarUrl } from '../../utils/Member';
import testausorveli from '../../assets/testausorveli.png';
import { usePlausible } from 'next-plausible';
import { useCallback, useEffect, useRef } from 'react';

export type AvatarRowProps = {
    members: Member[];
    expandOnHover?: boolean;
    withNames?: boolean;
}

type AvatarRowPlausibleEvents = {
    hoverAvatar: { hoverAvatarName: string, hoverAvatarId: string }
}


export function AvatarRow({ members, expandOnHover, withNames }: AvatarRowProps) {
    const plausible = usePlausible<AvatarRowPlausibleEvents>();
    const ref = useRef<HTMLUListElement | null>(null);

    const styleLastItems = useCallback(() => {
        if (!ref.current) return

        const items = Array.from(ref.current.children);

        items.forEach(item => {
            item.classList.remove(styles.lastItem);
        });

        const groups = Object.groupBy(items, x => x.getBoundingClientRect().bottom)

        Object
            .entries(groups)
            .map(([_, items]) => items?.at(-1))
            .filter(last => last != undefined)
            .forEach((last) => last.classList.add(styles.lastItem))
    }, []);

    useEffect(() => {
        styleLastItems()

        window.addEventListener('resize', styleLastItems);
        return () => {
            window.removeEventListener("resize", styleLastItems)
        }
    }, [styleLastItems])

    return (
        <div className={withNames ? styles.withNames : ''}>
            {members.map(member => (
                <Tooltip
                    key={member.name}
                    className={styles.tooltip}
                    id={`avatar-row-tooltip-${member.name}`}>
                    {member.name}
                </Tooltip>
            ))}
            <ul ref={ref} className={`${styles.avatarRow} ${expandOnHover ? styles.expandOnHover  : ''}`}>
                {members.map(member => {
                    return (
                        <li key={member._id} data-tooltip-id={`avatar-row-tooltip-${member.name}`} onMouseEnter={() => {member.name != "" ? plausible("hoverAvatar", {props: {hoverAvatarName: member.name, hoverAvatarId: member._id.toString()}}) : null}}>
                            <Image src={
                                member.avatar ? member.avatar : (String(member._id).startsWith('ts:') ? getMemberAvatarUrl(String(member._id).replace('ts:', '')) : testausorveli)} alt={member.name} width={35} height={35} />
                        </li>
                    )
                })}
            </ul>
            { withNames ? <span>{members.map(member => member.name).join("; ")}</span> : null}
        </div>
    )
}
