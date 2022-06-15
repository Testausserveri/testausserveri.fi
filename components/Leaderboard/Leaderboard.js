import styles from './Leaderboard.module.css'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { RiQuestionLine } from "react-icons/ri"
import { Explanation } from '../Explanation/Explanation';

function LeaderboardItem({index, data, valueFormatter}) {
    return (
        <li>
            <div className={styles.itemData}>
                <div>{index}.</div>
                <div>{data.name}</div>
                <div>{valueFormatter ? valueFormatter(data.value) : data.value}</div>
            </div>
            <div className={styles.itemBar} style={{"--perc": `${data.percentage}%`}}></div>
        </li>
    )
}

function remap(t, in_min, in_max, out_min, out_max) {
    return (t - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export function LeaderboardGroup({children}) {
    return (
        <div className={styles.group}>
            {children}
        </div>
    )    
}

export function Leaderboard({data, title, valueFormatter, explanation}) {
    data.sort((a, b) => (b.value - a.value))
    data = data.map(item => (
        {
            ...item, 
            percentage: Math.floor(remap(
                item.value, 
                data[data.length - 1].value, 
                data[0].value, 
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
                {data.map((item, i) => (
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