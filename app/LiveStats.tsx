"use client";

import { useEffect, useState } from 'react';
import { StatGroup } from '../components/Stat/StatGroup';
import { Stat } from '../components/Stat/StatCard';
import { useGuildInfo } from '@/contexts/GuildInfoContext';
import { GuildInfoModelOption } from '@/utils/types';

export function LiveStats() {
    const guildInfo = useGuildInfo<["memberCount", "membersOnline", "messagesToday"]>();
    const [stats, setStats] = useState<Stat[]>([]);

    useEffect(() => {
        setStats([
            {
                "label": "Jäseniä",
                "value": guildInfo?.memberCount
            },
            {
                "label": "Paikalla nyt",
                "value": guildInfo?.membersOnline
            },
            {
                "label": "Viestejä tänään",
                "value": guildInfo?.messagesToday
            },
            {
                "label": "Projekteja",
                "value": 40
            }
        ])
    }, [guildInfo])

    return <StatGroup stats={stats} />
}

