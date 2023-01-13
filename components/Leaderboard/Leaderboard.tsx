import styles from './Leaderboard.module.css'


import { Explanation } from '../Explanation/Explanation';
import { PropsWithChildren, ReactNode } from 'react';

type LeaderboardItemProps = {
    index: number,
    data: {
        name: string,
        value: number,
        percentage: number
    },
    valueFormatter?: (value: number) => string
}

function LeaderboardItem({ index, data, valueFormatter }: LeaderboardItemProps) {
    return (
        <li>
            <div className={styles.itemData}>
                <div>{index}.</div>
                <div>{data.name}</div>
                <div>{valueFormatter ? valueFormatter(data.value) : data.value}</div>
            </div>
            {/* @ts-ignore */}
            <div className={styles.itemBar} style={{ "--perc": `${data.percentage}%` }}></div>
        </li>
    )
}

function remap(t: number, in_min: number, in_max: number, out_min: number, out_max: number) {
    return (t - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export type LeaderboardGroupProps = PropsWithChildren<{}>;

export function LeaderboardGroup({ children }: LeaderboardGroupProps) {
    return (
        <div className={styles.group}>
            {children}
        </div>
    )
}

export type LeaderboardProps = {
    data: {
        name: string,
        value: number,
    }[],
    title: string,
    valueFormatter?: (value: number) => string,
    explanation?: ReactNode
}

export function Leaderboard({ data, title, valueFormatter, explanation }: LeaderboardProps) {
    const dataSorted = data.sort((a, b) => (b.value - a.value))
    const dataWithPercentages = dataSorted.map(item => (
        {
            ...item,
            percentage: Math.floor(remap(
                item.value,
                dataSorted[dataSorted.length - 1].value,
                dataSorted[0].value,
                40,
                90)
            )
        }
    ))

    return (
        <div className={styles.container}>
            <h3>
                {title}
                {explanation ?
                    <Explanation>{explanation}</Explanation>
                    : null}
            </h3>
            <ul className={styles.items}>
                {dataWithPercentages.map((item, i) => (
                    <LeaderboardItem
                        key={i}
                        index={i}
                        data={item}
                        valueFormatter={valueFormatter} />
                ))}
            </ul>
        </div>
    )
}